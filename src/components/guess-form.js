import React from 'react';
import {connect} from 'react-redux';
import { Tooltip, InputGroup, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import {setGuess, restartGame} from '../actions';
import './guess-form.css'

export class GuessForm extends React.Component {
	constructor(props) {
    	super(props);
    }

  	onSubmit(event) {
		event.preventDefault();
		
		const value = this.textInput.value;	
		this.props.dispatch(setGuess(value));
		this.textInput.value = '';
		this.textInput.focus();
	}
	
	render() {
		let guessCount = this.props.guessCount;  
		let guessRight = this.props.guessRight;
		
		return (
			<Form inline onSubmit={e => this.onSubmit(e)}>
	        	{!(guessCount === 3 || guessRight === true) ?
	 				<FormGroup>
		              	<InputGroup>
		                	<FormControl id="user-guess" inputRef={input => this.textInput = input} type="text" required/>
		              		<InputGroup.Button>
		                		<Button id="guess-button" type="submit">Guess</Button>
		              		</InputGroup.Button> 
	              		</InputGroup>
	              	</FormGroup>
	            : false}
			</Form>
		);
	}
}

const mapStateToProps = state => ({
  guessRight: state.guessRight,
  guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessForm);
