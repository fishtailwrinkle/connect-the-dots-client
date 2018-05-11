
export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = correctAnswer => ({
	type: RESTART_GAME,
	correctAnswer
});