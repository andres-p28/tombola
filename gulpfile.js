require('./configure');

var argv = require('yargs').argv
var browserify = require('browserify');
var browsersync = require('browser-sync');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jade = require('gulp-jade');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var reactify = require('reactify');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var watchify = require('watchify');

var stylesSrc = [
    './components/**/*.scss',
    './sass/**/*.scss'
];

function buildScript (file) {
    var props = {
        entries: ['./components/' + file],
        debug: true,
        transform: [reactify]
    };

    var bundler = watchify(browserify(props));

    function rebundle () {
        var stream = bundler.bundle();

        return stream.on('error', handleError)
            .pipe(source('bundle.js'))
            .pipe(gulpif(argv.production, buffer()))
            .pipe(gulpif(argv.production, uglify()))
            .pipe(gulp.dest('./build/'));
    }

    bundler.on('update', function () {
        rebundle();
    });

    return rebundle();
}

function handleError () {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'Error',
        message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
}

function buildView () {
    return gulp.src('./views/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build/'));
}

function buildImages () {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('./build/images'))
}

function buildStyle () {
    return gulp.src(stylesSrc)
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./build/'));
}

gulp.task('clean-build', function () {
    return gulp.src('./build/**/*.*', {read: false})
        .pipe(rimraf({force: true}));
});

gulp.task('build-script', function () {
    return buildScript('app.js');
});

gulp.task('build-view', function () {
    return buildView();
});

gulp.task('build-images', function () {
    return buildImages();
});

gulp.task('build-style', function () {
    return buildStyle();
});

gulp.task('watch-style', function () {
    gulp.watch(stylesSrc, ['build-style']);
});

gulp.task('open-server', function () {
    if (!argv.production) {
        browsersync.init({
            files: ['./build/bundle.js', './build/styles.css'],
            notify: false,
            port: 8000,
            server: {
                baseDir: './build'
            },
            ui: false
        });
    }
})

gulp.task('default', function () {
    return runSequence('clean-build', [
        'build-script', 'build-view', 'build-images', 'build-style', 'watch-style'
    ], 'open-server');
});
