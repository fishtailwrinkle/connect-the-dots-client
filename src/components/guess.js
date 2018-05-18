import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';
import {restartGame} from '../actions';

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

  let answer, pixels;

  fetch(API_BASE_URL+'/random', {
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(data => {
      answer = data.vocab;
      this.props.dispatch(restartGame(answer));
      //this.props.correctAnswer = answer;
      pixels = {"objects": JSON.parse(data.pixels)};
      canvas.loadFromJSON({"objects": JSON.parse(data.pixels)});
      
      console.log("vocab: "+answer);
    //  console.log(data.pixels);
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
          <h2>Guess</h2><br/>
          <canvas id="guess" width="500" height="500"></canvas>
          <br/>
        
          <div className="canvas-container">
            <GuessForm />
            
<button
          onClick={e => this.goToGuess(e)}>Start a nw game</button>    
        

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
