import React, { Component } from 'react'
import ListingItem from './ListingItem'

export default class Listing extends Component {
	getListItems() {
		let episodes = this.props.episodes.filter((ep) => {
			return ep.group === this.props.group;
		}).sort((a,b) => {
			if(a.episode_id < b.episode_id) {
				return -1;
			}
			else if(a.episode_id > b.episode_id) {
				return 1;
			}
			return 0;
		});
		return episodes.map((ep) => {
			return (
				<ListingItem episode={ep} key={ep.episode_id} />
			)
		});
	}
	render() {
		return (
		<div className="directory-listing">
			<h2>{this.props.group}</h2>
			<ul>
				{this.getListItems()}
			</ul>
		</div>
		);
	}
}
