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
  setTimeout( function() {console.log(fabric)} , 2000);
  //console.log(fabric);
//    var canvas = this.__canvas = new fabric.Canvas('c', {
//    isDrawingMode: true
//  });

}

  render() {
    return (
        <div>
        <script src="../../public/javascripts/fabric.min.js"></script>
      
        <canvas id="c" width="500" height="500"></canvas>
          </div>



    );

  }
}

export default connect()(Draw);
