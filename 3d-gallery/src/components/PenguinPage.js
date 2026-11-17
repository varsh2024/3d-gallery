// PeacockPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PenguinPage.css';

function PenguinPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>ColdBird</h1>
            <p>
            Penguins are a group of aquatic flightless birds from the family Spheniscidae (/sfɪˈnɪsɪdiː, -daɪ/) of the order Sphenisciformes (/sfɪˈnɪsəfɔːrmiːz/).[4] They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the ocean water, penguins have countershaded dark and white plumage and flippers for swimming.</p>
            <a href="https://www.pbs.org/wnet/nature/blog/peacock-fact-sheet/" className="explore-button">Explore Now</a>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/201px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg" alt="Peacock" className="peacock-image" />
        </div>
      </header>
    </div>
  );
}

export default PenguinPage;
