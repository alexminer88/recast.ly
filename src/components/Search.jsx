class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  setTimeoutCallback() {
    // this.props.searchYouTube(this.props.options, this.props.updateVideoDataCallBack);
    this.props.searchYouTube({
      query: this.state.value,
      max: this.props.options.max,
      key: this.props.options.key
    }, this.props.updateVideoDataCallBack);
    console.log(this.state.value);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    this.setTimeoutCallback();
  }
  
  handleClick(event) {
    // make a get request
    
    this.setTimeoutCallback();
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>     
    );
  }
}

Search.propTypes = {
  // searchYoutube ajax get request function
  searchYouTube: React.PropTypes.func.isRequired,
  // callback
  updateVideoDataCallBack: React.PropTypes.func.isRequired,
  // options for callback
  options: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
