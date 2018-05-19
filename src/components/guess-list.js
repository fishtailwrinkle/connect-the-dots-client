import React from 'react';
import { connect } from 'react-redux';

export function GuessList(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>
      {guess}
    </li>
  ));

  return (
    <ol id="guessList" className="guessBox clearfix">
      {guesses}
    </ol>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);