import React, { Component } from 'react'
class Home extends Component {
  render() {
    return (
      <div className='Heading'>
      React component Lifecycle consists of four lifecycle phases :  
        <pre>
          1. Initialization phase
          2. Mounting phase
          3. Updating Phase
          4. Unmounting Phase
        </pre>
        <strong>Initialization phase</strong> : In this phase we initialise all the state variable and all the props which your component might be receiving will also get assigned with the proper values.<br></br>        <strong>Mounting phase</strong> : In this phase your component will be mounted on the screen for the very first time . This contains functions like constructor, render and componentDidMount.
        <p>constructor : In this function we can create the state variable also if we want access the props before the component gets mounted so we can access in the constructor function. Before ES6 we also used to bind the functions in this function to access them throughout the component.</p>
        <p>render : This function is the most important one, since it is responsible to return the HTML and styling part of the component. In this we do not write normal HTML instead we will be writing JSX in the component, which is writing HTML inside JS. This JSX gets transpiled using babel to convert it from ES6 to ES5 so that your browser can understand.</p>
        <p>componentDidMount : This function will be running just what render function. We dont have to call this function, we just need to define it, it will be called automatically. This function is the place where we should write all the server calls. So that your html from render function will be loaded first and then the data will be coming from the server and will be rendered on the screen.</p>
      </div>
    )
  }
}
export default Home