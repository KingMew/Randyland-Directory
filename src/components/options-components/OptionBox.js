import React, { Component } from 'react'

export default class OptionContainer extends Component {
	getValue() {
		return this.props.options[this.props.value]
	}
	render() {
		return (
			<div className="option-container">
				<input type="checkbox" onClick={() => {this.props.toggleEvent(this.props.value)}} checked={this.getValue()}/> {this.props.name}
			</div>
		);
	}
}
