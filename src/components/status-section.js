import React from 'react';

import Feedback from './feedback';
import GuessList from './guess-list';

export default function StatusSection(props) {
  return (
    <section >
    	<Feedback />	
      	<GuessList  />
    </section>
  );
}
