import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { Tooltip, InputGroup, Button, Form, FormGroup, FormControl } from 'react-bootstrap';

import './draw.css';

const {API_BASE_URL} = require('../config');

let canvas, naturalWidth, naturalHeight;

export class Draw extends React.Component {
  constructor(props) {
    super(props);
  }

updateCanvasDimensions() {
  naturalWidth = 0.8*document.getElementById("bd-wrapper").clientWidth;
  naturalHeight = naturalWidth;

  canvas.setDimensions({width: naturalWidth, height:naturalHeight});
}

componentDidMount() {
  canvas = new window.fabric.Canvas('draw', {
    isDrawingMode: true
  });
  
  this.updateCanvasDimensions();
  window.addEventListener("resize", this.updateCanvasDimensions);

  var $ = function(id){return document.getElementById(id)};

  var drawingColorEl = $('drawing-color'),
     // drawingLineWidthEl = $('drawing-line-width'),
      clearEl = $('clear-canvas');

  clearEl.onclick = function() { canvas.clear() };

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = this.value;
  };
  
  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = 10;
  }
}

componentWillUnmount() {
  window.removeEventListener("resize", this.updateCanvasDimensions);
}


onSubmit(event) {
    event.preventDefault();

    this.props.history.push(`/nav`);

    const value = this.textInput.value;
    this.textInput.value = "";
    this.textInput.focus();

    /*
    const value = this.input.value;
    this.input.value = '';
    this.input.focus();
*/


  let jsonString = JSON.stringify(canvas);
  //let jsonBody = {'pixels': '', 'accessCode': '', 'vocab': ''};
  let jsonBody = {};
  jsonBody.pixels = JSON.parse(jsonString).objects;
  //jsonBody.pixels = "x y z 20 10 5";
  //let accessCode = "11111";
  //jsonBody.accessCode = accessCode;
  jsonBody.vocab = value;

    axios.post(API_BASE_URL, {vocab: jsonBody.vocab, pixels: jsonBody.pixels})
    //axios.post(API_BASE_URL, {vocab: "breakfast", pixels: jsonBody.pixels})
      .then(res => {
        console.log(res);
      });
  }

  render() {  
    return (
        <div id="bd-wrapper">
          <h2>Create a new drawing for other players to guess what it is.</h2><br/>
          <canvas id="draw" ></canvas>;
          <div className="canvas-container" >
         
            <Form inline onSubmit={e => this.onSubmit(e)}>
              <FormGroup>
              <InputGroup>
                <FormControl type="color" defaultValue="#665666" id="drawing-color"/>
                <InputGroup.Button>
                  <Button type="button" id="clear-canvas">Clear</Button>
                </InputGroup.Button>    
              </InputGroup> 
              <InputGroup>
                <InputGroup.Addon>Answer</InputGroup.Addon>
                <FormControl inputRef={input => this.textInput = input} type="text" required/>
              </InputGroup>
              </FormGroup>
              <InputGroup.Button>
                <Button type="submit">Submit</Button>
              </InputGroup.Button>
            </Form>
            <br/>
          </div>
        </div>
    );
  }
}

export default connect()(Draw);
