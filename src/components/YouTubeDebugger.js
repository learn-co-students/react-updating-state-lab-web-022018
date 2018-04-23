import React from "react"

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

bitrateButton = () => {
  this.setState({settings: {
    bitrate: 12,
    video: {
      resolution: '1080p'
    }
  }})
}

resButton = () => {
  this.setState({settings: {
    bitrate: 8,
    video: {
      resolution: '720p'
    }
  }})
}

  render () {
    return (
      <div>
        <button className = "bitrate" onClick = {this.bitrateButton}/>
        <button className = "resolution" onClick = {this.resButton}/>
      </div>
    )
  }
}

export default DigitalClicker
