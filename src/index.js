import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCOTwmZBpR8KNWT8QAKZv_Rnte-kzHUFhc';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
		)
}

ReactDOM.render(<App />, document.getElementById('container'));