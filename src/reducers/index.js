import {RESTART_GAME} from '../actions';

const initialState = {
	correctAnswer: 'ocean'
};
//Retrieve from database?

export default (state=initialState, action) => {
	if (action.type === RESTART_GAME) {
	console.log(state.correctAnswer);
	return Object.assign({}, state, initialState);
	}

	
	return state;
};