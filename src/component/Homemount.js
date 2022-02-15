import React, { Component } from 'react'

 class Homemount extends Component {
    constructor(){
        super()
        console.log("This is constructor function");
    }

    componentDidMount(){
        console.log("This is componentDidMount function");
    }

    render(){
        console.log("This is render function");
        return(
            <div>
                Mounting Phase
            </div>
        )
    }
}
export default Homemount