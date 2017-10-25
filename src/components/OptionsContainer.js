import React, { Component } from 'react'
import OptionBox from './options-components/OptionBox'

import {toggleOption,toggleSecretOption} from '../actions/actions'

export default class OptionsContainer extends Component {
	getOptionsList() {
		const options = [
			{
				value: "autoswitch",
				name: "Automatically switch to next episode after current one ends"
			},
			{
				value: "autoplay",
				name: "Automatically play video when switching to a new episode"
			},
			{
				value: "skip_op",
				name: "Skip Randyland opening sequences"
			}
		];
		return options.map((op) => {
			return <OptionBox key={op.value} options={this.props.options} value={op.value} name={op.name} toggleEvent={(value) => {this.props.dispatch(toggleOption(value))}} />
		});
	}
	getSOptionsList() {
		if(this.props.misc.visible >= 3) {
			return (
				<div>
					<br /><br />
					<OptionBox options={this.props.misc} value="gal" name="GAL MODE" toggleEvent={(value) => {this.props.dispatch(toggleSecretOption(value))}} />
					<OptionBox options={this.props.misc} value="funny" name="FUNNY MODE" toggleEvent={(value) => {this.props.dispatch(toggleSecretOption(value))}} />
				</div>
			);
		}
	}
	render() {
		return (
		<div className="home-container">
			<h2>Player Options</h2>
			<div style={{textAlign: 'center', margin: '2em 0'}}>{
				//eslint-disable-next-line
			}<div style={{display: 'inline-block',width:'45%'}}><a href="javascript:;" onClick={() => {window.history.go(-1);}}>Go Back to Episode</a></div>
				<div style={{display: 'inline-block',width:'45%'}}><a href="#directory">Go Back to Directory</a></div>
			</div>
			<div>
				{this.getOptionsList()}
				{this.getSOptionsList()}
			</div>
		</div>
		);
	}
}
