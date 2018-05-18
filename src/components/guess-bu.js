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
  var canvas = new window.fabric.Canvas('guess', {
    isDrawingMode: false
  });

  let answer, pixels;

  console.log(API_BASE_URL);

  fetch(API_BASE_URL+'/random', {
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(data => {
      answer = data.vocab;
      this.restartGame(answer);
      //this.props.correctAnswer = answer;
      pixels = {"objects": JSON.parse(data.pixels)};
      canvas.loadFromJSON({"objects": JSON.parse(data.pixels)});
  
      console.log("vocab: "+answer);
    //  console.log(data.pixels);
    }); 
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
          onClick={() => this.restartGame()}>Start a new game</button>
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
