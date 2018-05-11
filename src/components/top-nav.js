import React from 'react';
import {connect} from 'react-redux';

//import './top-nav.css';

export function TopNav(props) {
	return (
		<nav>
        	<a href="">Home | </a>
        	<a href="">Next</a>
    

		</nav>	
	);
}

export default connect()(TopNav);