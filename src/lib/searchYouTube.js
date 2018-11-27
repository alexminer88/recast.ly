import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&maxResults=${options.max}&key=${options.key}&type=video`,
    type: 'GET',
    // success: callback
    success: function (data) {
      callback(data.items);
    }
  });
};

export default searchYouTube;
