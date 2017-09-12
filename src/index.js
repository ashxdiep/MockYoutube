//getting React from modules
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from  './components/video_detail';
import _ from 'lodash';
//holding our API key for youtube
const API_KEY = 'AIzaSyDMBMP7hVEwsNA05km7REg1MiW1NQobS-0';


// Create a new component 
//This component should produce some HTML 
class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		//this is how you make an ajax call in react right when component renders
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);

			//update the videos array so it doesn't start as empty videos
			this.setState({ 
				videos,
				selectedVideo: videos[0] });
		});
	}

	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);
		return(
			<div>
				<SearchBar onSearchTermChange = {videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos = {this.state.videos} />
			</div>
		);
	}
	
}


//put this component and put it into the DOM 
ReactDOM.render(<App/>, document.querySelector('.container')); //put the component in <this document>