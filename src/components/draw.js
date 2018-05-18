import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './draw.css';

const {API_BASE_URL} = require('../config');

let canvas;

export class Draw extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
//      text: 'Test board'
    }  
  }


componentDidMount() {
  canvas = new window.fabric.Canvas('draw', {
    isDrawingMode: true
  });
  
  var $ = function(id){return document.getElementById(id)};

  var drawingColorEl = $('drawing-color'),
     // drawingLineWidthEl = $('drawing-line-width'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
  };

  var debug = $('debug');

  
  debug.onclick = function() {
  let jsonString = JSON.stringify(canvas);
  let jsonObjects = JSON.parse(jsonString).objects;
   console.log(jsonObjects);
   //console.log(JSON.parse(jsonString).objects);
   // console.log(JSON.stringify(canvas));
    console.log(canvas.isDrawingMode);
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = 10;
  }


}

onSubmit(event) {
    event.preventDefault();


    this.props.history.push(`/nav`);



    const value = this.input.value;
    this.input.value = '';
    this.input.focus();

    console.log("submit!");
  //  this.props.dispatch(setGuess(value));
    //this.input.value = '';
    //this.input.focus();

  let jsonString = JSON.stringify(canvas);
  //let jsonBody = {'pixels': '', 'accessCode': '', 'vocab': ''};
  let jsonBody = {};
  jsonBody.pixels = JSON.parse(jsonString).objects;
  //jsonBody.pixels = "x y z 20 10 5";
  //let accessCode = "11111";
  //jsonBody.accessCode = accessCode;
  jsonBody.vocab = value;

    console.log(jsonBody);




    axios.post(API_BASE_URL, {vocab: jsonBody.vocab, pixels: jsonBody.pixels})
    //axios.post(API_BASE_URL, {vocab: "breakfast", pixels: jsonBody.pixels})
      .then(res => {
        console.log(res);
      });

  }





  render() {
    return (
        <div id="bd-wrapper">
          <h2>Drawing</h2><br/>
          <canvas id="draw" width="500" height="500"></canvas>
          <br/>
        
          <div className="canvas-container">
            <button id="clear-canvas" className="btn btn-info">Clear</button><br/>
            <button id="debug" className="btn btn-info">Display JSON</button><br/>
            
            <div>
              <label htmlFor="drawing-color">Line color:</label>
              <input type="color" defaultValue="#665666" id="drawing-color"/><br/>
            </div>
      
            <br/><br/>
              

            <form onSubmit={e => this.onSubmit(e)}>
              <label htmlFor="drawing-vocabulary">Vocabulary</label><br/>
              <input 
                type="text" 
                id="drawing-vocabulary"
                ref={input => (this.input = input)}
                required
              />
              <button 
                type="submit"
                id="submitButton" 
                className="btn btn-info"
              >
                Submit
              </button>
            </form>



          </div>
        </div>
    );
  }
}

export default connect()(Draw);
