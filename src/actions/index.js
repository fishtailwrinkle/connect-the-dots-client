export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
	type: RESTART_GAME,
	correctAnswer
});

export const SET_GUESS = 'SET_GUESS';
export const setGuess = guess => ({
	type: SET_GUESS,
	guess
});

//export const SET_ANSWER = 'SET_ANSWER';
//export const setAnswer = correctAnswer
