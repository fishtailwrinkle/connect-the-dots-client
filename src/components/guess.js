import React from 'react';
import {connect} from 'react-redux';
import { Tooltip, InputGroup, Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import GuessForm from './guess-form';
import StatusSection from './status-section';
import {restartGame} from '../actions';

import './guess.css';

const {API_BASE_URL} = require('../config');

let canvas, naturalWidth, naturalHeight;

export class Guess extends React.Component {
  constructor(props) {
    super(props);
  }

  updateCanvasDimensions() {
    naturalWidth = 0.8*document.getElementById("bd-wrapper").clientWidth;
    naturalHeight = naturalWidth;
    canvas.setDimensions({width: naturalWidth, height:naturalHeight});
  }

  componentDidMount() {
    canvas = new window.fabric.Canvas('guess', {
      isDrawingMode: false
    });

    this.updateCanvasDimensions();
    window.addEventListener("resize", this.updateCanvasDimensions);

    fetch(API_BASE_URL+'/random', {})
    .then(res => {
       if(!res.ok) {
         return Promise.reject(res.statusText);
       }
       return res.json();
    }).then(data => {
      this.props.dispatch(restartGame(data.vocab));
      //pixels = {"objects": JSON.parse(data.pixels)};
      canvas.loadFromJSON({"objects": JSON.parse(data.pixels)});
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCanvasDimensions);
  }

  restartGame() {
    this.props.dispatch(restartGame());
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
        <canvas id="guess"></canvas>
        <div className="canvas-container">
          <GuessForm /> 
        </div>
        <Button id="new-button" type="button" onClick={e => this.goToGuess(e)}>Start a new game</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pixels: state.pixels,
  correctAnswer: state.correctAnswer  
});

export default connect(mapStateToProps)(Guess);
