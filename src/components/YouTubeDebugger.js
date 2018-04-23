// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  bitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resClick = () => {
    console.log(this.state.settings.video)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      },
    });
  }

  render(){
    return (
      <div>
      <button onClick={this.bitClick} className="bitrate">{this.state.settings.bitrate}</button>
      <button onClick={this.resClick} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
