import React, { Component } from 'react'
import Youtube from 'react-youtube'
import Player from 'react-player'

import NextButton from './video-components/NextButton'
import PreviousButton from './video-components/PreviousButton'

import getEpisodeHash from '../EpisodeHash'

export default class VideoContainer extends Component {
	getStartTime() {
		if(this.props.options.skip_op) {
			const episode = this.props.episode;
			if(episode.title === "Episode 15 (The Lost Episode)" || episode.title === "Episode 1" || episode.title === "Episode 14 (A Very Special Episode)") {
				return 0;
			}
			if(episode.group === "Randyland" && parseInt(episode.title.split(" ")[1],10) > 0) {
				if(parseInt(episode.title.split(" ")[1],10) >= 10) {
					return 22;
				}
				else {
					return 45;
				}
			}
		}
		return 0;
	}
	getVideoEndCallback() {
		if(this.props.options.autoswitch) {
			return () => {
				if(this.props.next.group) {
					window.location = getEpisodeHash(this.props.next);
				}
				else {
					window.location = "#directory";
				}
			};
		}
		else {
			return () => {};
		}
	}
	getVideoComponent() {
		const episode = this.props.episode;
		if(episode.url.includes("youtube")) {
			let videoid = episode.url.split("v=")[1];
			if(this.props.transitioning) {
				return (
					<div style={{textAlign: 'center'}}>
						<img alt={episode.title} src={"https://img.youtube.com/vi/"+videoid+"/maxresdefault.jpg"} className="videoPlaceholder" />
					</div>
				);
			}
			return (
				<div className="responsive-container">
				<Youtube
					className="youtube-video"
					videoId={videoid}
					opts={{
						playerVars: {
							modestbranding: 1,
							rel: 0,
							showinfo: 0,
							start: this.getStartTime(),
							autoplay: (this.props.options.autoplay ? 1 : 0)
						}
					}}
					onEnd={this.getVideoEndCallback()}
				/>
				</div>
			);
		}
		else if(episode.url.includes("vimeo")) {
			let videoid = episode.url;
			if(this.props.transitioning) {
				return (
					<div></div>
				)
			}
			else {
				return (
					<div className="responsive-container">
					<Player
						className="youtube-video"
						url={videoid}
						ref={vimeo => {this.vimeo = vimeo;}}
						width={960}
						height={540}
						config={{
							vimeo: {
								autoplay: this.props.options.autoplay,
								color: "#ff0000",
								title: false,
								api: true,
								width: 960,
								height: 540
							}
						}}
						playing={this.props.options.autoplay}
						onStart={() => {
							if(this.vimeo.getCurrentTime() < this.getStartTime()) {
								this.vimeo.seekTo(this.getStartTime());
							}
						}}
						onEnded={this.getVideoEndCallback()}
					/>
					</div>
				)
			}
		}
		else {
			return (
				<div>Player not available</div>
			);
		}
	}

	componentDidMount() {
		if(!this.props.transitioning) {
			document.title = this.props.episode.group+": "+this.props.episode.title+" - The Randyland Directory";
		}
	}

	render() {
		const episode = this.props.episode;
		let next = (
			<NextButton next={this.props.next} />
		);
		let previous = (
			<PreviousButton prev={this.props.prev} />
		);
		return (
			<div className="video-container">
				<div className="video-player">{this.getVideoComponent()}</div>
				<div className="video-info">
					<div className="prev-next">
						{previous} {next}
					</div>
					<div className="options-link">
						<a href="#options">Video Playback Options</a>
					</div>
					<h2 className="title">{episode.title}</h2>
					<h3 className="series">{episode.group}</h3>
					<p className="description">{episode.description}</p>
			</div>
			</div>
		);
	}
}
