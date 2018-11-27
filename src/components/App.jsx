import VideoList from '../components/VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // current: exampleVideoData[0],
      // videos: exampleVideoData
      current: {},
      videos: []
    };
    
  }
  
  onClick(e, video) {
    this.setState({
      current: video
    });   
  }
  
  componentDidMount() {
    // get request
    var options = {
      query: 'react',
      max: 5,
      key: YOUTUBE_API_KEY
    };
    
    // set state to get request's data
    var callback = function(videoData) {
      this.setState({
        current: videoData[0],
        videos: videoData
      });
    };
    
    this.props.searchYouTube(options, callback.bind(this));
    
  }
  
  render() {
    if (Object.keys(this.state.current).length === 0 || this.state.videos.length === 0) {
      var videoPlayer = <div></div>;
      var videoList = <div></div>;
    } else {
      var videoPlayer = <div><VideoPlayer video={this.state.current} /></div>;
      var videoList = <div><VideoList videos={this.state.videos} onClick={this.onClick.bind(this)}/></div>;
    }
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {videoPlayer}
          </div>
          <div className="col-md-5">
            {videoList}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
