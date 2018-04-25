import React from 'react'
export default class DigitalClicker extends React.Component {
  constructor(props) {
    super()
    this.state = { timesClicked: 0 }
  }

  increment = () => {
    this.setState({timesClicked: this.state.timesClicked + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
