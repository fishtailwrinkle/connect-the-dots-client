import {RESTART_GAME, SET_GUESS, SET_ANSWER} from '../actions';
const {API_BASE_URL} = require('../config');

const answers = ['post', 'toy', 'ocean', 'book', 'apple', 'donut'];




  
//  console.log(API_BASE_URL);

const initialState = {
	correctAnswer: 'nono',
	pixels: '',
	guess: []
};
//Retrieve from database?
      //canvas.loadFromJSON({"objects": JSON.parse(this.props.pixels)});
  


export default (state=initialState, action) => {

	if (action.type === RESTART_GAME) {


		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer,
			//correctAnswer: answer,
			guess: []	
		});


		
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