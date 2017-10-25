import React, { Component } from 'react'

export default class HomeContainer extends Component {
	render() {
		return (
		<div className="home-container">
			<h1>The Randyland Directory</h1>
			<p>The Residents have currently done two internet video projects over their career: The Bunny Boy and The Randyland series. The Bunny Boy series was taken off of YouTube and put onto a DVD... but there are episodes missing and the DVD format isn't good for a long running series of short videos posted on the internet. So, the original Bunny Boy series experience seems to have been lost forever (until The Residents do put out the remaining content).</p>

			<p>Currently, Randyland is still up on the internet and it seems that won't be changing anytime soon. However, if you weren't originally following along with Randy's blog, it's hard to track down all the episodes to watch them in order. Some episodes require digging through Randy's blog archive for a while to reach them, and it can be quite a pain if you're trying to binge watch them but want to stop and resume your place at another time.</p>

			<p>The <strong>Randyland Directory</strong> was made to catalogue all of the In My Room/Randyland episodes in one convenient place for any newcomers to the series or those who would like to re-experience the series with as little pain as possible. Hope you enjoy it!</p>

			<p style={{textAlign: "right"}}>-- mewee</p>

			<p><a href="#credits">Application programming credits</a></p>
		</div>
		);
	}
}
