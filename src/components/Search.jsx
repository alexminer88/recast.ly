class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   // setTimeout((() => console.log(this.state)).bind(this), 1000);
  // }
  
  handleClick(event) {
    // make a get request
    
    //empty out search bar
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.props.queryString} onChange={this.props.formChange}/>
        <button className="btn hidden-sm-down" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>     
    );
  }
}

Search.propTypes = {
  //searchYoutube ajax get request function
  //callback
  // options for callback
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
