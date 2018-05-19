import React from 'react';

import './info-section.css';

export default function InfoSection(props) {
  return (
    <section id="what">
      <h2>How to play?</h2>
      <p>This is a Drawing and Guessing Game!</p>
      <ul>
        <li>Create a new drawing for other players to guess what it is.</li>
        <li>Look at drawings from other players and guess a word to describe what it is. You will have 3 guesses.</li>
      </ul>
    </section>
  );
}
