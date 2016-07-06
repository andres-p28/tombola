# Tombola
**Tombola** is a fun community music player that lets you share you favourite songs and dynamically create a playlist with your team members. Have some fun and... If you have the music, you'll have a place to go!
    
## developer notes
Clone this repository and start to contribute with this amazing application. Help us to create a great and fun experience through the bests of the arts, *music*.
    
    git clone https://github.com/pretendersglb/tombola.git
    
Start playing with our code just doing:

    gulp
    
We use *ReactJS*, so we're sure you will have some fun ;)

## code standards
Please follow our code standards... And yes, this is a **must**.

### name conventions
Your variables, functions and methods as well as your components should be named as we do with these standards.

- variables: Our var names are really descriptive. You can have a very long var name if it helps to understand what it's saving. Like: `videoId` or `nextSongInPlaylist`.
- functions/methods: Should be descriptive as well. Every function does one thing and does it right. And its name represent what it's doing so we will use names like this:
    - renderSomething: Function that's returning an element to be rendered in DOM. Like: `renderVideoPlayer`.
    - getSomething: We don't use literal functions but we name our methods like those. If we want to return some props we do: `getSomethingProps`, if we want to return some value we do: `getInputValue`.
    - handleSomething: Event handler method. Any event should be called like this. So, if we want to click the Add button we use: `handleAddButtonClick`.
    - isSomething / areSomething / hasSomething: When returning a boolean. So, we want to check if an Input is disabled we do: `isInputDisabled`.
- components: There are two differents component types: App and Core components. Application components are the ones that holds or mix some other App or Core components inside or the ones that does application logic like searching into APIs or managing a page behaviour. Core components are those that uses only html tags or are created to being used a lot of times. Also has some logic but are very enclosed to its behaviour.

### method order
Each React component we created has its own methods and we want to be easy to read and understand so our components should be maintainable and readable. You should be ordering your code like this:

1. React lifecycle methods (by the order that they are being instantiated)
2. Render methods (by the order that they are used. Always use React default's `render` method first)
3. Get methods (by the order that they are used)
4. Handle methods (by the order that they are used)
5. Boolean methods (by the order that they are used)
6. Any other/custom method

### other javascript things
You should always... (c'mon, you already know this)

- End your declarations/returns with a semi-colon (;).
- Add a space between statements and its parameters. Like: `if (something === somethingElse)` or `render: function ()`.
- We don't want to overuse ternaries. Always prefer regular `if, else` statements.
- Return `null` instead of blank elements.
- Every **custom** prop should be defined in *propTypes*.
