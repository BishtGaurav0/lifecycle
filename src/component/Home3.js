import React, { Component } from 'react'

 class Home3 extends Component {
  render() {
    return (
      <div>
           <strong>Unmounting phase</strong> : In this phase only componentWillUnmount will be called, because over here we are removing the component from the DOM so no render n constructor function will be called.
        
        <p>componentWillUnmount : This function will be called after the removing ths component from the DOM </p>
  
      </div>
    )
  }
}
export default Home3