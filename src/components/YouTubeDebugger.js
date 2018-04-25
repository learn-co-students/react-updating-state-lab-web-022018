// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component{
   state = {
     errors: [],
     user: null,
     settings: {
       bitrate: 8,
       video: {
         resolution: '1080p'
       }
     }
   }

   changeBitrate = (event) =>{
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate:12
      }
    })
   }

   changeResolution = (event) =>{
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution:'720p'
        }
      }
    })
   }

   render(){
     return(
       <div>
       <button onClick={this.changeBitrate} className="bitrate"></button>
       <button onClick={this.changeResolution} className="resolution"></button>
       </div>
     )
   }
}

export default YouTubeDebugger
