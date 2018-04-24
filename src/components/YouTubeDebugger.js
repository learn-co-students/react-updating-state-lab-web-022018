
// This component has several state properties.
//   The initial state shape looks like this:
  // js { errors: [],
  //     user: null,
  //     settings: {
  //       bitrate: 8, video: {
  //         resolution: '1080p' } } }
// Create a button with the class 'bitrate'.
//   Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'.
//   Clicking this button changes the settings.video.resolution
//     state property to '720p'
import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state =   {  errors: [],
                      user: null,
                      settings: {
                        bitrate: 8,
                        video: {
                          resolution: '1080p' } } }
  }

  ///////////
  changeBitrate = ()=>{
    console.log(this.state)
    console.log(this.state.settings.bitrate)
    // setState({settings["bitrate"] = 12},console.log(this.state);)
    // setState({this.state.settings.bitrate : 12},console.log(this.state);)
    // this.setState({settings : {settings: 12}})
    this.setState({settings : Object.assign({},
                  this.state.settings,
                  {bitrate: 12}
     )  })
  }
  ///////////
  // this.setState({
  //   addressInfo: Object.assign({}, this.state.addressInfo, {
  //     city: 'New York City',
  //   }),

  changeResolution = ()=>{
    console.log(this.state)
    // this.setState({settings : {video: {resolution: '720p'}}})
    // this.setState({settings: {video:
    //   Object.assign({},
    //       this.state.settings.video,
    //       {resolution: '720p'}
    // }
    // )})
    // this.setState({settings: {
    //   video: {
    //     resolution : '720p'
    //   }
    // }})//setState
    // this.setState({...this.state.settings: {
    //   ...this.state.settings.video: {
    //     ...this.state.settings.video.resolution : '720p'
    //   }
    // }})//setState
    this.setState({settings: {
      ...this.state.settings, video: {
        ...this.state.settings.video, resolution : '720p'
      }
    }})//setState
  }
  //////////
  render(){
    return(
      <div>
      <button onClick={this.changeBitrate} className='bitrate'>bitrate</button>
      <button onClick={this.changeResolution} className='resolution'>resolution</button>
      </div>
    )
  }
}


export default YouTubeDebugger
