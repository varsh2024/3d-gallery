// PeacockPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PeacockPage.css';

function PeacockPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Bird</h1>
            <p>
              Peafowl is a common name for two bird species of the genus Pave and one species of the closely related genus Avogadro within the tribe Paganini of the family Elephantiasis (the pheasants and their allies). Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens. The two Asiatic species are the blue or Indian peafowl originally from the Indian subcontinent, and the green peafowl from Southeast Asia. The Congo peafowl, native only to the Congo Basin, is not a true peafowl. Male peafowl are known for their piercing calls and their extravagant plumage.
            </p>
            <a href="https://www.pbs.org/wnet/nature/blog/peacock-fact-sheet/" className="explore-button">Explore Now</a>
          </div>
          <img src="https://t3.ftcdn.net/jpg/00/20/23/84/360_F_20238404_QWpOgaN7g1sTC28vkaf39T7mfVKKo455.jpg" alt="Peacock" className="peacock-image" />
        </div>
      </header>
    </div>
  );
}

export default PeacockPage;
