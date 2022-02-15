import React, { Component } from 'react'

class Home2 extends Component {
  render() {
    return (
      <div>
          <strong>Updating phase</strong> : This phase comes when the component gets updated because of any changes made by user like any click on any button, or if user is giving any input or any event which we want to handle. So in that case the component has to be updated. In react, we do not update the Real DOM directly instead we use Virtual DOM to update the component, this makes react component efficient.
        <p>render : This function is the most important one, since it is responsible to return the HTML and styling part of the component. In this we do not write normal HTML instead we will be writing JSX in the component, which is writing HTML inside JS. This JSX gets transpiled using babel to convert it from ES6 to ES5 so that your browser can understand.</p>
        <p>componentDidUpdate : This function will be called after the component is updated. </p>
   
      </div>
    )
  }
}
export default Home2