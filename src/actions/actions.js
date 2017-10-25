export const SWITCH_PAGE = "SWITCH_PAGE";
export const SIGNAL_PAGE = "SIGNAL_PAGE";
export const COMPLETE_TRANSITION = "COMPLETE_TRANSITION";
export const START_TRANSITION = "START_TRANSITION";
export const TOGGLE_OPTION = "TOGGLE_OPTION";
export const SHOW_SECRET = "SHOW_SECRET";
export const TOGGLE_SECRET_OPTION = "TOGGLE_SECRET_OPTION";

export function switchPage(page) {
	return {
		type: SWITCH_PAGE,
		page
	};
}
export function signalPageTransition(page) {
	return {
		type: SIGNAL_PAGE,
		page
	}
}
export function showSecret() {
	return {
		type: SHOW_SECRET
	}
}
export function completeTransition() {
	return {
		type: COMPLETE_TRANSITION
	}
}
export function startTransition() {
	return {
		type: START_TRANSITION
	}
}
export function hashChange() {
	return {
		type: SIGNAL_PAGE,
		page: window.location.hash.substring(1)
	}
}
export function toggleOption(value) {
	return {
		type: TOGGLE_OPTION,
		option: value
	}
}
export function toggleSecretOption(value) {
	return {
		type: TOGGLE_SECRET_OPTION,
		option: value
	}
}
