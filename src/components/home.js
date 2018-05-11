import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
//      text: 'Test board'
    }  
  }

  goToDraw(event) {
    event.preventDefault();
    this.props.history.push(`/draw`);
  }

  goToGuess(event) {
    event.preventDefault();
    this.props.history.push(`/guess`);
  }

  render() {
    return (
      <div className="home-page">
        <h2>Welcome to Connect the Dots...</h2>
        <button
          onClick={e => this.goToDraw(e)}>Draw</button>    
        <button
          onClick={e => this.goToGuess(e)}>Guess</button>    
      </div>
    );
  }
}

