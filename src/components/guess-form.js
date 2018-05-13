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


	startNewGame(event) {
    event.preventDefault();
    this.props.dispatch(restartGame('book'));
  	}



/*
You can use a refresh route.

const Refresh = ({ path = '/' }) => (
    <Route
        path={path}
        component={({ history, location, match }) => {
            history.replace({
                ...location,
                pathname:location.pathname.substring(match.path.length)
            });
            return null;
        }}
    />
);
Usage:

<Refresh path="/refresh"/>
Now you can push to history with the url prefixed with /refresh and it will rerender the route (this happens because Refresh route uses a component which forces remount of component) .

history.push('/refresh/') => Reloads /
history.push('/refresh/posts?user=tkvw') => Reloads /posts?user=tkvw

The /refresh/ urls won't be visible in the history because they are replaced.

*/


		
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
				<button
					onClick={e => this.startNewGame(e)}>Start a new game</button>
			</form>
		);
	}
}

export default connect()(GuessForm);
