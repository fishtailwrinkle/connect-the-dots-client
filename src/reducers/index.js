import * as actions from '../actions';
const {API_BASE_URL} = require('../config');

const initialState = {
	guessRight: false,
	correctAnswer: '',
	pixels: '',
	feedback: 'Make your guess!',
	guesses: []
};

export const reducer = (state=initialState, action) => {
  
	if (action.type === actions.RESTART_GAME) {
	
	let correctAnswer, pixels;

		console.log("restartAnswer: "+action.correctAnswer);
	

		return Object.assign({}, state, {
			guessRight: false,
			feedback: 'Make your guess!',
			correctAnswer: action.correctAnswer,
			pixels: '',
			guesses: []
		});
		
	}
	else if (action.type === actions.SET_GUESS) {
		console.log("stateAnswer: "+state.correctAnswer);
		console.log("actionGuess: "+action.guess);
		
		let feedback, guess, answer, guessRight;

		guess = action.guess.toUpperCase();
		answer = state.correctAnswer.toUpperCase();

		console.log("guess="+guess+" - answer="+answer);

		if (guess === answer) {
			guessRight = true;
			feedback = 'You got it!';
		}
		else {
			guessRight = false;
			feedback = 'Ask a friend!';
		}

		console.log(feedback);

		return Object.assign({}, state, {
			guessRight,
			feedback,
			guesses: [...state.guesses, guess]
		});
	}
	
	return state;
};