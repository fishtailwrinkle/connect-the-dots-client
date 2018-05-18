import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import {restartGame} from '../actions';

const {API_BASE_URL} = require('../config');

export class Guess extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
    
  }

componentDidMount() {
/*
    var canvas = new window.fabric.Canvas('guess', {
    isDrawingMode: false
  });
*/
    this.props.dispatch(restartGame());
    //pixels = this.props.pixels;

//canvas.loadFromJSON({"objects": JSON.parse(props.pixels)});
    
 // console.log("correctAnswer:"+this.props.correctAnswer);
  
}

componentDidMount() {
 console.log("correctAnswer:"+this.props.correctAnswer);
 
}

  render() {
    return (
        <div id="bd-wrapper">
          <h2>Guess</h2><br/>
          <canvas id="guess" width="500" height="500"></canvas>
          <br/>
        
          <div className="canvas-container">
            <GuessForm />
            <button
          onClick={e => this.props.dispatch(restartGame())}>Start a new game</button>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  pixels: state.pixels,
  correctAnswer: state.correctAnswer  
});

export default connect(mapStateToProps)(Guess);
