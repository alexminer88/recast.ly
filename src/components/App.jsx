import VideoList from '../components/VideoList.js';
import placeholderVideoData from '../data/placeholderVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: placeholderVideoData[0],
      videos: placeholderVideoData
    };  
  }
  
  onClick(e, video) {
    this.setState({
      current: video
    });   
  }
  
  componentDidMount() {
    var options = {
      query: 'react js',
      max: 5,
      key: YOUTUBE_API_KEY
    };
    
    var callback = function(videoData) {
      this.setState({
        current: videoData[0],
        videos: videoData
      });
    };
    
    this.props.searchYouTube(options, callback.bind(this));    
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.current} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} onClick={this.onClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );    
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
