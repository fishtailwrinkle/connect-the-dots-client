import React from 'react';
import { Tooltip, ButtonGroup, Button, Well, OverlayTrigger } from 'react-bootstrap';
import './home.css';
import InfoSection from './info-section';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
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
        <div>
          <Button className="home-button" bsSize="large" onClick={e => this.goToDraw(e)}>
            Draw
          </Button>
          <Button className="home-button" bsSize="large" onClick={e => this.goToGuess(e)}>
            Guess
          </Button>
        </div>
        <InfoSection /> 
      </div>
    );
  }
}

