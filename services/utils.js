var Utils = function () {

};

Utils.prototype.parseISO8601ToString = function (date) {

    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours = '', minutes = '', seconds = '', totalseconds;

    if (reptms.test(date)) {
      var matches = reptms.exec(date);

      if (matches[1]) {
          hours = Number(matches[1]);

          if (hours < 10) {
              hours = '0' + hours;
          }

          hours += ':';
      }
      if (matches[2]) {
          minutes = Number(matches[2]);

          if (minutes < 10) {
              minutes = '0' + minutes;
          }

          minutes += ':';
      }
      if (matches[3]) {
          seconds = Number(matches[3]);

          if (seconds < 10) {
              seconds = '0' + seconds;
          }
      }

    }

    return hours + minutes + seconds;
};

module.exports = new Utils();
