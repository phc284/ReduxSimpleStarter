import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCOTwmZBpR8KNWT8QAKZv_Rnte-kzHUFhc';

YTSearch ({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data)
})

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('container'));