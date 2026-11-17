// PeacockPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DressDesignPage.css';

function DressDesignPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>DressDesign</h1>
            <p>
            Fashion design is the art of applying design, aesthetics, clothing construction and natural beauty to clothing and its accessories. It is influenced by culture and different trends and has varied over time and place. "A fashion designer creates clothing, including dresses, suits, pants, and skirts, and accessories like shoes and handbags, for consumers. </p>
            <a href="https://www.pbs.org/wnet/nature/blog/peacock-fact-sheet/" className="explore-button">Explore Now</a>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fashion_Runway.jpg/330px-Fashion_Runway.jpg" alt="Peacock" className="peacock-image" />
        </div>
      </header>
    </div>
  );
}

export default DressDesignPage;
