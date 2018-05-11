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

componentDidMount() {this.render();}

  render() {
    return (
      <div className="home-page">
        <h2>Welcome to Connect the Dots...</h2>
      



 <div id="bd-wrapper">
		<h2>Drawing</h2><br/>
        <canvas id="c" width="500" height="500"></canvas>
        <br/>
        

<div className="canvas-container">
          <button id="clear-canvas" className="btn btn-info">Clear</button><br/>
          <button id="debug" className="btn btn-info">Display JSON</button><br/>

      

        <div>
            <label htmlFor="drawing-color">Line color:</label>
            <input type="color" defaultValue="#005E7A" id="drawing-color"/><br/>
          </div>
      
    	<div>
            <br/><br/>
            <label htmlFor="drawing-vocabulary">Vocabulary</label><br/>
            <input type="text" id="drawing-vocabulary"/><br/>
            <button id="submit" className="btn btn-info">Submit</button>

          </div>
  



</div>







      </div>
      </div>

    );

  }
}

export default connect()(Draw);
