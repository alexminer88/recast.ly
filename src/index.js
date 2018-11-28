// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube, {searchYouTubeDebounced} from './lib/searchYouTube.js';


ReactDOM.render(<App searchYouTube={searchYouTubeDebounced}/>, document.getElementById('app'));