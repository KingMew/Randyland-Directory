import React, { Component } from 'react'

export default class VideoPlaylistButton extends Component {
	render() {
		return (
			<a href={this.props.hash}>{this.props.label}</a>
		);
	}
}
