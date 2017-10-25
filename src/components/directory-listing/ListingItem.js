import React, { Component } from 'react'

export default class ListingItem extends Component {
	getHashCode() {
		const episode = this.props.episode;
		return "#"+(episode.group.toLowerCase() + "/" + episode.title.toLowerCase()).replace(/\s/g,'-');
	}

	getEpisodeTitle() {
		return this.props.episode.title;
	}

	render() {
		return (
		<li className="listing-item"><a href={this.getHashCode()}>{this.getEpisodeTitle()}</a></li>
		);
	}
}
