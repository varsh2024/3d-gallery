// PeacockPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SnackePage.css';

function SnackePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Snacke</h1>
            <p>
            Snakes are elongated limbless reptiles of the suborder Serpentes (/sɜːrˈpɛntiːz/).[2] Cladistically squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales much like other members of the group. Many species of snakes have skulls with several more joints than their lizard ancestors and relatives, enabling them to swallow prey much larger than their heads (cranial kinesis). To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most only have one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca.</p>           
            <a href="https://www.pbs.org/wnet/nature/search-results/?q=snacke#gsc.tab=0&gsc.q=snacke&gsc.page=1" className="explore-button">Explore Now</a>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKXozSkxM8p7AfIcCAIPoOq6IKsOkNiY8zXEskiteH8c4oq3ZtBemlXQ&s" alt="Peacock" className="peacock-image" />
        </div>
      </header>
    </div>
  );
}

export default SnackePage;
