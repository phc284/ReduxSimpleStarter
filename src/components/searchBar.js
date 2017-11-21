import React, { Component } from 'react';

class SearchBar extends Component {
	constructor() {
		super()

		this.state = {
			
		}
	}

	render() {
		return (
			<input onChange={(event) => {console.log(event.target.value)}}/>
		)
	}
}

export default SearchBar;