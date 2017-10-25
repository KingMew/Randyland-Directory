import React, { Component } from 'react'
import logo from '../../img/randyland_logo.png'

export default class Header extends Component {
	render() {
		return (
			<header>
				<a href="#directory"><img alt="Randyland" src={logo} /></a>
			</header>
		)
	}
}
