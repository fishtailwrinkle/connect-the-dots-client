import React from 'react';
import {connect} from 'react-redux';
import {restartGame} from '../actions';
//import './top-nav.css';

export function Nav(props) {
	return (
		<div>
			<button
				onClick={() => props.dispatch(restartGame())}
			>
				Guess
			</button>
			<button>Draw</button>
		</div>
	);
}

export default connect()(Nav);