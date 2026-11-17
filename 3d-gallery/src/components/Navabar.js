import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src="https://www.pngfind.com/pngs/b/137-1370577_logo-design-png.png" alt="Brand Logo" width={65} height={65} />
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="user-avatar">
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.31479799.1734334125&semt=ais_hybrid" alt="User Avatar" width={65} height={65} />
      </div>
    </nav>
  );
};

export default Navbar;
