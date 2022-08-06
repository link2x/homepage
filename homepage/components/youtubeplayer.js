import React, { Component } from 'React';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  <div class="twelve columns">
                <LiteYouTubeEmbed id={this.props.videoID} title={this.props.videoTitle}/>
            </div>
  }
}

export default YoutubePlayer
