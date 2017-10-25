import { createStore } from 'redux'
import rootReducer from './reducers/reducers'
import randyland from './data/randyland.json'

export default function configureStore(preloadedState = {
	directory: randyland.directory,
	currentVideo: (window.location.hash.substring(1) || "home"),
	pageTransition: (window.location.hash.substring(1) || "home"),
	transitioning: false,
	playerOptions: {
		autoswitch: false,
		autoplay: false,
		skip_op: false
	},
	misc: {
		visible: 0,
		gal: false,
		funny: false
	}
}) {
	return createStore(
		rootReducer,
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	); //Apply middlewares
}
