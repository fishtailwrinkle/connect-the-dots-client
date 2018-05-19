import React from 'react';
import { connect } from 'react-redux';
import './feedback.css'

export function Feedback(props) {
  /** 
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message 
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
  const key = props.guessCount;
  const guessRight = props.guessRight;


  let guessFeedback;
  //let guessAgain;
  //guessAgain = <span className="visuallyhidden">Guess again!</span>;

  guessFeedback = props.feedback;  
  
  if (guessRight === false) {
    if (key === 0) {
      guessFeedback = <span>You have 3 guesses!</span>;
    }
    else if (key > 0 && key < 3) {
    }
    else if (key === 3) {
      guessFeedback = <span>Answer: {props.correctAnswer.toUpperCase()}</span>;
    }
  }

  return (
    <h2 
      key={key}
      id="feedback"
      role="status"
      aria-live="assertive"
      aria-atomic="true"
    >
      {guessFeedback} 
    </h2>
  );
}

const mapStateToProps = state => ({
  guessRight: state.guessRight,
  guessCount: state.guesses.length,
  feedback: state.feedback,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Feedback);

