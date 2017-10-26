import React, { Component } from 'react'
import mobileCheck from '../../mobileCheck'

export default class OptionContainer extends Component {
	getValue() {
		return this.props.options[this.props.value]
	}
	render() {
		if(mobileCheck && this.props.value === "autoplay") {
			return null;
		}
		return (
			<div className="option-container">
				<input type="checkbox" onClick={() => {this.props.toggleEvent(this.props.value)}} checked={this.getValue()} id={this.props.value}/><label for={this.props.value}> {this.props.name}</label>
			</div>
		);
	}
}
