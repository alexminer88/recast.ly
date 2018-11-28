import VideoList from '../components/VideoList.js';
import placeholderVideoData from '../data/placeholderVideoData.js';
import VideoPlayer from '../components/VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from '../components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      current: placeholderVideoData[0],
      videos: placeholderVideoData,
      query: ''
    };
    
    this.options = {
      query: 'nujabes',
      max: 5,
      key: YOUTUBE_API_KEY
    };
    
    // this.handleSearchFormChange = this.handleSearchFormChange.bind(this);
    // this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
    this.updateVideoDataCallBack = this.updateVideoDataCallBack.bind(this);
  }
  
  onClick(e, video) {
    this.setState({
      current: video
    });   
  }
  
  // handleSearchFormChange(event) {
  //   this.setState({query: event.target.value});
  //   setTimeout((() => console.log(this.state.query)).bind(this), 1000);
  // }
  
  updateVideoDataCallBack(videoData) {
    this.setState({
      current: videoData[0],
      videos: videoData
    });
  }
  
  componentDidMount() {    
    this.props.searchYouTube(this.options, this.updateVideoDataCallBack);
  }
  
  render() {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.props.searchYouTube} updateVideoDataCallBack={this.updateVideoDataCallBack} options={this.options}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.onClick.bind(this)}/> 
          </div>
        </div>
      </div>
    );    
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
