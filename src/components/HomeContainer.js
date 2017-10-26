import React, { Component } from 'react'

export default class HomeContainer extends Component {
	componentDidMount() {
		document.title = "About - The Randyland Directory";
	}
	render() {
		return (
		<div className="home-container">
			<h1>The Randyland Directory</h1>
			<p>The Residents have currently done two internet video projects over their career: The Bunny Boy and The Randyland series. The Bunny Boy series was taken off of YouTube and put onto a DVD... but there are apparently episodes missing and the DVD format isn't good for a long running series of short videos posted on the internet. So, the original Bunny Boy series experience seems to have been lost forever (until The Residents do put out the remaining content).</p>

			<p>Currently, Randyland is still up on the internet and it seems that won't be changing anytime soon. However, if you weren't originally following along with Randy's blog, it's hard to track down all the episodes to watch them in order. Some episodes require digging through Randy's blog archive for a while to reach them, and it can be quite a pain if you're trying to binge watch them but want to stop and resume your place at another time.</p>

			<p>I really do love the whole In My Room/Randyland series. As a relatively new fan, it's really the first big Residents project I was able to actually watch all the way through as it was happening. Some of these episodes are a few years old now so I find the earlier episodes quite nostalgic. I'm a bit sad that this series never actually reached its 143rd installment as was promised in the descriptions of the In My Room videos, but the fact that there are even 55 episodes of In My Room and Randyland is definitely a pleasant surprise.</p>

			<p>The <strong>Randyland Directory</strong> was made to catalogue all of the In My Room/Randyland episodes in one convenient place for any newcomers to the series or those who would like to re-experience the series with as little pain as possible. There are also some configurable options to assist in your binge watching experience. Hope you enjoy it!</p>

			<p style={{textAlign: "right"}}>-- mewee</p>

			<p><a href="#credits">Application Credits</a></p>
		</div>
		);
	}
}
