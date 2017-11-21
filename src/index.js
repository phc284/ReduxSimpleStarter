import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

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

		YTSearch ({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({
				videos: videos,
				selected: videos[0]
			 })
		})
	}



	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selected}/>
				<VideoList
					onVideoSelect = {selected => {this.setState({selected})}}
					videos={this.state.videos}/>
			</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('container'));
