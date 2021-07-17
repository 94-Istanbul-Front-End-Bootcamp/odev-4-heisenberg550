import React, { Component } from 'react'

 class functionButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello There"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler = ( ) => {
        this.setState({
            message : "goodBye"
        })
    }

    render() {
        return (
            <div>
             <div>{this.state.message}</div>
             {/* <button onClick={this.clickHandler.bind(this)}>Click!</button>    */}
             <button onClick= {this.clickHandler}>Click!</button>   
            </div>
        )
    }
}

export default functionButton







// import React from 'react'

// function FunctionButton() {

//    function clickHandler () {
//         console.log('Clicked');
//     }

//     return ( 
//         <div>
//             <button onClick={clickHandler}>Click me</button>
//         </div>
//     )
// }

// export default FunctionButton
