import {
	USER_LOGGEDIN,
	USER_LOGGEDOUT,
	SET_USER,
	REMOVE_USER,
	LOADING,
	UPVOTE_SEEK,
	DOWNVOTE_SEEK,
} from '../types';

const initialState = {
	isAuthenticated: false,
	currentUser: {},
	loading: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGGEDOUT:
			return {
				...state,
				isAuthenticated: false,
			};

		case USER_LOGGEDIN:
			return {
				...state,
				isAuthenticated: true,
			};
		case SET_USER:
			return {
				...state,
				currentUser: action.user,
				loading: false,
			};
		case REMOVE_USER:
			return {
				...state,
				currentUser: null,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case UPVOTE_SEEK:
			state.currentUser.likedSeeks.unshift(action.payload.id);
			state.currentUser.dislikedSeeks = state.currentUser.dislikedSeeks.filter(
				(el) => el !== action.payload.id
			);
			return {
				...state,
			};
		case DOWNVOTE_SEEK:
			state.currentUser.dislikedSeeks.unshift(action.payload.id);
			state.currentUser.likedSeeks = state.currentUser.likedSeeks.filter(
				(el) => el !== action.payload.id
			);
			return {
				...state,
			};
		default:
			return state;
	}
};

export default reducer;