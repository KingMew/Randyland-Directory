import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HomeContainer from '../components/HomeContainer'
import VideoContainer from '../components/VideoContainer'
import Directory from '../components/Directory'

import Header from '../components/layout/Header'
import TransitionManager from '../components/TransitionManager'

import {hashChange} from '../actions/actions'

import '../style.css'

class App extends Component {

	getMainComponent(identifer) {
		const episode = this.getEpisode(identifer);
		if(Object.keys(episode).length === 0 && episode.constructor === Object) {
			if (identifer === "directory") {
				return (
					<Directory episodes={this.props.directory} key="#directory"/>
				);
			}
			else {
				return (
					<HomeContainer key="#home"/>
				);
			}
		}
		else {
			return (
				<VideoContainer episode={episode} prev={this.getEpisodeById(episode.episode_id-1)} next={this.getEpisodeById(episode.episode_id+1)} key={this.makeEpisodeIdentifer(episode)}/>
			);
		}
	}

	makeEpisodeIdentifer(episode) {
		return (episode.group.toLowerCase() + "/" + episode.title.toLowerCase()).replace(/\s/g,'-');
	}
	getEpisode(identifier) {
		let episode = this.props.directory.filter((i) => {
			return this.makeEpisodeIdentifer(i) === identifier;
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

	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.props.dispatch(hashChange());
		}, false);
	}

	render() {
		return (
			<div>
				<Header />
				<TransitionManager options={this.props.options} directory={this.props.directory} currentPage={this.props.currentVideo} transitionPage={this.props.transitionVideo} dispatch={this.props.dispatch} transitioning={this.props.transitioning} misc={this.props.misc}/>
			</div>
		);
	}
}

App.propTypes = {
	currentVideo: PropTypes.string.isRequired,
	transitionVideo: PropTypes.string.isRequired,
	directory: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
	options: PropTypes.object.isRequired,
	misc: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
	return {
		transitionVideo: state.pageTransition,
		currentVideo: state.currentVideo,
		directory: state.directory,
		transitioning: state.transitioning,
		options: state.playerOptions,
		misc: state.misc
	};
}

export default connect(mapStateToProps)(App);
