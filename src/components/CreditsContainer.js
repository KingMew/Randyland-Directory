import React, { Component } from 'react'
import getName from '../getName';
import {showSecret} from '../actions/actions';
import octocat from '../img/GitHub-Mark-Light-120px-plus.png';

export default class CreditsContainer extends Component {
	getStyle() {
		return this.props.flag2 >= 3 ? {color: 'pink'} : {textDecoration: 'none', cursor: "default"};
	}
	componentDidMount() {
		document.title = "Credits - The Randyland Directory";
	}
	render() {
		return (
		<div className="home-container">
			<h1>The Randyland Directory</h1>
			<p>This is a collection of videos first and foremost created by The Residents and Don Hardy. All videos linked are from official sources, specifically from The Residents' and Don Hardy's Youtube/Vimeo accounts. This is just some dumb web app that lets you play those videos in order without hunting them down.</p>
			<p>This application is powered by React and also uses the <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-youtube">react-youtube</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-player">react-player</a> community components. Man, I really did none of the work at all, right?</p>
			<p>The rest of this program was created by {getName(this.props.flag,this.props.flag?0x1d4a11:0xdead)} Martin (aka "<a href="#directory" onClick={()=>{this.props.dispatch(showSecret())}} style={this.getStyle()}>mewee</a>" on Residents.com chat).</p>
			<div className="octocat"><a title="View the GitHub repository for this application" target="_blank" rel="noopener noreferrer" href="https://github.com/meisekimiu/Randyland-Directory"><img src={octocat} alt="View the GitHub repository for this application" /></a></div>
		</div>
		);
	}
}
