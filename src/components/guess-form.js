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
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					type="text"
					name="userGuess"
					id="userGuess"
					autoComplete="on"
					ref={input => (this.input = input)}
					required
				/>
				<button
					type="submit"
					name="submit"
					id="guessButton"
				>
					Guess
				</button>
				
			</form>
		);
	}
}

export default connect()(GuessForm);
