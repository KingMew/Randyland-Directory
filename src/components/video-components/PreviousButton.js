import React, { Component } from 'react'
import VideoPlaylistButton from './VideoPlaylistButton'
import getEpisodeHash from '../../EpisodeHash'

export default class PreviousButton extends Component {
	render() {
		let hash = "#directory";
		let label = "Return to Directory";
		if(this.props.prev.title) {
			hash = getEpisodeHash(this.props.prev);
			label = "← Previous Episode"
		}
		return (
			<div style={{display: "inline-block", width: "45%", textAlign: "center"}}>
				<VideoPlaylistButton hash={hash} label={label} />
			</div>
		);
	}
}
