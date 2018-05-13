import React from 'react';
import {connect} from 'react-redux';

import './draw.css';

export class Draw extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
//      text: 'Test board'
    }  
  }

componentDidMount() {
  var canvas = new window.fabric.Canvas('draw', {
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
    console.log(JSON.stringify(canvas));
    console.log(canvas.isDrawingMode);
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = 10;
  }
}

 reset(event) {
    event.preventDefault();
    this.props.history.push(`/guess`);
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
      
            <div>
              <br/><br/>
              <label htmlFor="drawing-vocabulary">Vocabulary</label><br/>
              <input type="text" id="drawing-vocabulary"/><br/>
              <button id="submit" className="btn btn-info">Submit</button>
            </div>
          </div>
        </div>
    );
  }
}

export default connect()(Draw);
