import {SWITCH_PAGE,SIGNAL_PAGE,COMPLETE_TRANSITION,START_TRANSITION,TOGGLE_OPTION,SHOW_SECRET,TOGGLE_SECRET_OPTION} from '../actions/actions'
import comments from '../data/comments'

export default function rootReducer(state,action) {
	switch(action.type) {
		case SWITCH_PAGE:
			return Object.assign({},state,{
				currentVideo: action.page,
				pageTransition: action.page
			});
		case SIGNAL_PAGE:
			return Object.assign({},state,{
				pageTransition: action.page
			});
		case START_TRANSITION:
			return Object.assign({},state,{
				transitioning: true
			});
		case COMPLETE_TRANSITION:
			return Object.assign({},state,{
				currentVideo: state.pageTransition,
				transitioning: false
			});
		case TOGGLE_OPTION:
			let value = !state.playerOptions[action.option];
			let playerOptions = Object.assign({},state.playerOptions,{
				[action.option]: value
			});
			return Object.assign({},state,{
				playerOptions
			});
		case SHOW_SECRET:
			return Object.assign({},state,{
				misc: Object.assign({},state.misc,{
					visible: state.misc.visible+1
				})
			});
		case TOGGLE_SECRET_OPTION:
			let directory = state.directory.map((o) => {return o;});
			if(action.option === "funny") {
				directory = directory.map((o) => {
					let n = o;
					n.description = comments.filter((c) => {return c.id === n.episode_id})[0].description;
					return n;
				});
			}
			return Object.assign({},state,{
				directory,
				misc: Object.assign({},state.misc,{
					[action.option]: true
				})
			});
		default:
			return Object.assign({},state,{});
	}
}
