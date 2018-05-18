import * as actions from '../actions';
const {API_BASE_URL} = require('../config');

const initialState = {
	correctAnswer: 'book',
	pixels: 'none',
	guess: []
};

export const reducer = (state=initialState, action) => {
  
	if (action.type === actions.RESTART_GAME) {
	
	let correctAnswer, pixels;

		console.log("restartAnswer: "+action.correctAnswer);
	

		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer
		});
		
	}
	else if (action.type === actions.SET_GUESS) {
		console.log("stateAnswer: "+state.correctAnswer);
		console.log("actionGuess: "+action.guess);
		
		let feedback, guess, answer;

		guess = action.guess.toUpperCase();
		answer = state.correctAnswer.toUpperCase();

		console.log("guess="+guess+" - answer="+answer);


		if (guess === answer) {
			feedback = 'You got it!';
		}
		else {
			feedback = 'Google it!';
		}

		console.log(feedback);

		return Object.assign({}, state, {
			feedback,
			guess: [...state.guess, guess]
		});
	}
	
	return state;
};