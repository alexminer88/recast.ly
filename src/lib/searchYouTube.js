var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&maxResults=${options.max}&key=${options.key}&type=video&videoEmbeddable=true`,
    type: 'GET',
    // success: callback
    success: function (data) {
      callback(data.items);
    }
  });
};

var searchYouTubeDebounced = _.debounce(searchYouTube, 500);

export {searchYouTube as default, searchYouTubeDebounced};
