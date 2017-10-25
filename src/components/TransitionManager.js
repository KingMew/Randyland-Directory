//We're rolling our own TransitionGroup
import React, { Component } from 'react'
import getEpisodeHash from '../EpisodeHash'

import {completeTransition,startTransition} from '../actions/actions'

import HomeContainer from '../components/HomeContainer'
import VideoContainer from '../components/VideoContainer'
import Directory from '../components/Directory'
import OptionsContainer from '../components/OptionsContainer'
import CreditsContainer from '../components/CreditsContainer'

import './AnimationCSS.css'

export default class TransitionManager extends Component {
	getEpisode(identifier) {
		let episode = this.props.directory.filter((i) => {
			return getEpisodeHash(i).substring(1) === identifier;
		});
		if(episode.length > 0) {
			return episode[0];
		}
		else {
			return {};
		}
	}
	getEpisodeById(id) {
		let episode = this.props.directory.filter((i) => {
			return i.episode_id === id;
		});
		if(episode.length > 0) {
			return episode[0];
		}
		else {
			return {};
		}
	}
	getMainComponent(identifier = this.props.currentPage) {
		const episode = this.getEpisode(identifier);
		if(Object.keys(episode).length === 0 && episode.constructor === Object) {
			if (identifier === "about") {
				return (
					<HomeContainer />
				);
			}
			else if(identifier === "credits") {
				return (
					<CreditsContainer flag2={this.props.misc.visible} flag={this.props.misc.gal} dispatch={this.props.dispatch} />
				);
			}
			else if(identifier === "options") {
				return (
					<OptionsContainer misc={this.props.misc} options={this.props.options} dispatch={this.props.dispatch} />
				)
			}
			else {
				return (
					<Directory episodes={this.props.directory} />
				);
			}
		}
		else {
			return (
				<VideoContainer options={this.props.options} transitioning={this.props.transitioning} episode={episode} prev={this.getEpisodeById(episode.episode_id-1)} next={this.getEpisodeById(episode.episode_id+1)} />
			);
		}
	}

	transitionIsToLeft() {
		const current = this.getEpisode(this.props.currentPage);
		if(Object.keys(current).length === 0 && current.constructor === Object) {
			return true;
		}
		const next = this.getEpisode(this.props.transitionPage);
		if(Object.keys(next).length === 0 && next.constructor === Object) {
			return false;
		}
		return current.episode_id < next.episode_id;
	}

	getEnterAnimationName() {
		if(this.transitionIsToLeft())
			return "enter-to-left";
		else
			return "enter-to-right";
	}

	getExitAnimationName() {
		if(this.transitionIsToLeft())
			return "exit-to-left";
		else
			return "exit-to-right";
	}

	renderTransitions() {
		return (
			<div style={{position:'relative'}}>
				<div style={{animationName: this.getExitAnimationName()}} className="animatedTransition">
					{this.getMainComponent(this.props.currentPage)}
				</div>
				<div style={{animationName: this.getEnterAnimationName()}} className="animatedTransition">
					{this.getMainComponent(this.props.transitionPage)}
				</div>
			</div>
		)
	}

	componentDidUpdate() {
		if(this.props.currentPage !== this.props.transitionPage && !this.props.transitioning) {
			window.setTimeout(() => {this.props.dispatch(completeTransition())},600);
			this.props.dispatch(startTransition());
		}
	}

	render() {
		if(this.props.currentPage === this.props.transitionPage) {
			return (
			<div style={{position:'relative'}}>
				{this.getMainComponent()}
			</div>);
		}
		else {
			return (
			<div style={{position:'relative'}}>
				{this.renderTransitions()}
			</div>);
		}
	}
}
