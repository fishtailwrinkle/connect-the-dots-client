import {RESTART_GAME, SET_GUESS} from '../actions';

const answers = ['post', 'toy', 'ocean', 'book', 'apple', 'donut'];

const initialState = {
	correctAnswer: answers[Math.floor(Math.random() * 6)],
	guess: []
};
//Retrieve from database?

export default (state=initialState, action) => {
	

	if (action.type === RESTART_GAME) {
	//console.log(index);
	initialState.correctAnswer = answers[Math.floor(Math.random() * 6)];
		
	return Object.assign({}, state, initialState);
	}

	if (action.type === SET_GUESS) {
	console.log(state.correctAnswer);
	
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