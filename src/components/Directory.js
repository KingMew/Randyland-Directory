import React, { Component } from 'react'
import Listing from './directory-listing/Listing'

export default class Directory extends Component {
	componentDidMount() {
		document.title = "The Randyland Directory";
	}
	render() {
		return (
		<div className="directory-container">
			<h1>The Randyland Directory</h1>
			<p>Here is a list of all the "In My Room" and "Randyland" videos in the order they were initally released. I've also included the sort of "Post-Randyland" arc that happened leading up to The Ghost of Hope and transition from "Randy, Chuck, and Bob" to "The Real Residents".</p>
			<p><a href="#about">Click to read more about this directory</a></p>
			<Listing group="In My Room" episodes={this.props.episodes}/>
			<Listing group="Randyland" episodes={this.props.episodes}/>
			<Listing group="Post-Randyland" episodes={this.props.episodes}/>
		</div>
		);
	}
}
