import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			term: ''
		}
	}

	render() {
		console.log(this.state.term)
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={(event) => {this.setState({term: event.target.value});}}
				/>
				Value of the input is: {this.state.term}
			</div>
		)
	}
}

export default SearchBar;