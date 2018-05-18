import React from 'react';
import { connect } from 'react-redux';
const {API_BASE_URL} = require('../config');

export class Fetch extends React.Component {
/*  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));
*/


componentDidMount() {

    var canvas = new window.fabric.Canvas('guess', {
    isDrawingMode: false
  });



  let pixels, correctAnswer;

  fetch(API_BASE_URL+'/random', {})
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(data => {
      correctAnswer = data.vocab;
      //this.restartGame(answer);
      pixels = {"objects": JSON.parse(data.pixels)};
      // setState here
      canvas.loadFromJSON({"objects": JSON.parse(data.pixels)});
      console.log("vocab: "+correctAnswer);
    //  console.log(data.pixels);
    
    }); 
}


/*
    return Object.assign({}, state, {
      correctAnswer: 'mom'
    });
 */ 
 render() {
/*  return (

    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>


  );
*/
}
}
/*
const mapStateToProps = state => ({
  guesses: state.guesses
});
*/
export default connect()(Fetch);