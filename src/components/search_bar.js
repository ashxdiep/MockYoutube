//curly brackets means pulling out the Component so we can take out React from React.Component
import React, { Component } from 'react'; //need this to transpile jsx


class SearchBar extends Component { //gives functionality from react.component class 

	constructor(props){
		super(props);

		// we want to update this to be the value of the input 
		this.state = { term: ''}; 
	}

	render(){
		return (
			<div className = "search-bar">

				<input 
				value = {this.state.term}
				onChange = {event => this.onInputChange(event.target.value) } />
				
			</div>
			);
	}

onInputChange(term){
	this.setState({term});
	this.props.onSearchTermChange(term);
}
	
}

export default SearchBar; //any file in application can use this file 