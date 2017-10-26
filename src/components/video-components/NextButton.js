import React, { Component } from 'react'
import VideoPlaylistButton from './VideoPlaylistButton'
import getEpisodeHash from '../../EpisodeHash'

export default class NextButton extends Component {
	render() {
		let hash = "#directory";
		let label = "›";
		if(this.props.next.title) {
			hash = getEpisodeHash(this.props.next);
			label = "›"
		}
		return (
			<div style={{display: "inline-block", width: "45%", textAlign: "center"}}>
				<VideoPlaylistButton hash={hash} label={label} />
			</div>
		);
	}
}
