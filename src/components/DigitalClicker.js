// // Code DigitalClicker Component Here
// This component has an initial state property called timesClicked, which is initially defined as 0.
// The component renders out a button with a label that shows the timesClicked value.
//   This means that, at the start, your button should just say 0.
// Whenever the button is clicked, update the state by incrementing the timesClicked by 1.

import React from 'react'

class DigitalClicker extends React.Component{
  constructor(props){
    super()
    this.state = {timesClicked: 0}
  }
  hasBeenClicked = ()=>{
    let plusclick = this.state.timesClicked + 1
    this.setState({timesClicked: plusclick})
  }

  render(){
    return(
      // The component renders out a button with a label that shows the timesClicked value.
      <button onClick={this.hasBeenClicked}>{this.state.timesClicked}</button>
    )
  }
}


export default DigitalClicker
