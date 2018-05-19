import React from 'react';
import {connect} from 'react-redux';
import {setGuess, restartGame} from '../actions';

export class GuessForm extends React.Component {
	constructor(props) {
    	super(props);
    }

  	onSubmit(event) {
		event.preventDefault();
		
		const value = this.input.value;	
		this.props.dispatch(setGuess(value));
		this.input.value = '';
		this.input.focus();
	}
	
	render() {

  let guessCount = this.props.guessCount;  
  let guessRight = this.props.guessRight;
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				{!(guessCount === 3 || guessRight === true) ?
  					<input
					type="text"
					name="userGuess"
					id="userGuess"
					autoComplete="on"
					ref={input => (this.input = input)}
					required
				/>
				: false}
				{!(guessCount === 3 || guessRight === true) ?
  				<button
					type="submit"
					name="submit"
					id="guessButton"
				>
					Guess
				</button>
				: false}		
			</form>
		);
	}
}

const mapStateToProps = state => ({
  guessRight: state.guessRight,
  guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessForm);
