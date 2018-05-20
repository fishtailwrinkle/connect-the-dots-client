import React from 'react';
import {connect} from 'react-redux';
import {restartGame} from '../actions';
//import './top-nav.css';

export function Nav(props) {
	return (
		<div>
			<h1>Thanks for submitting your awesome drawing!</h1>
		</div>
	);
}

export default connect()(Nav);