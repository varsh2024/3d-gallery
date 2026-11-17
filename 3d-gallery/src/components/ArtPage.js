// PeacockPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ArtPage.css';

function ArtPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Arts</h1>
            <p>
            We are pleased to present the latest in art and art history scholarship. Inform your research with open access articles from our portfolio of journals and free-to-read posts on the OUPblog. You can also browse chapters from new titles, save up to 40% on key texts, and find out more about Latin Art and Architecture on Grove Art Online.

Please note, some of these resources require institutional subscription access.             </p>
             <a href="https://www.fundacionmapfre.org/en/blog/what-is-art-what-is-it-for/" className="explore-button">Explore Now</a>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3phZpQp2R1w2Wm65q_hSaunqCdwZ9Ge3ZQg&s" alt="Peacock" className="peacock-image" />
        </div>
      </header>
    </div>
  );
}

export default ArtPage;
