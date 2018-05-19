import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import StatusSection from './status-section';
import {restartGame} from '../actions';

import './guess.css';

const {API_BASE_URL} = require('../config');

var canvas;

export class Guess extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
    
  }

componentDidMount() {
canvas = new window.fabric.Canvas('guess', {
    isDrawingMode: false
  });

  fetch(API_BASE_URL+'/random', {
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(data => {
      //answer = data.vocab;
      this.props.dispatch(restartGame(data.vocab));
      //pixels = {"objects": JSON.parse(data.pixels)};
      canvas.loadFromJSON({"objects": JSON.parse(data.pixels)});
    });

    }

 goToGuess(event) {
    event.preventDefault();
    canvas.dispose();
    this.componentDidMount();
  }

  render() {
    return (
        <div id="bd-wrapper">
          <StatusSection />
            <canvas id="guess" width="500" height="500"></canvas>
          <div className="canvas-container">
            <GuessForm /> 
          </div>
                    <button id="new-button" onClick={e => this.goToGuess(e)}>Start a new game</button>          
  
        </div>
    );
  }
}

const mapStateToProps = state => ({
  pixels: state.pixels,
  correctAnswer: state.correctAnswer  
});

export default connect(mapStateToProps)(Guess);
