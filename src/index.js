import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyCOTwmZBpR8KNWT8QAKZv_Rnte-kzHUFhc';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: null,
			videos: []
		}

		this.videoSearch('surfboards');
	}

	videoSearch (term) {
		YTSearch ({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selected: videos[0]
			 })
		})
	}

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 900);

		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selected}/>
				<VideoList
					onVideoSelect = {selected => {this.setState({selected})}}
					videos={this.state.videos}/>
			</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('container'));
