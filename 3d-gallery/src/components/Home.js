import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://www.pngfind.com/pngs/b/137-1370577_logo-design-png.png"
            width={65}
            height={65}
            alt="Logo"
          />
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/BlogPage1">Blog</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons-navbar">
          <Link to="/SignUp">
            <button className="signup-button-navbar">Sign Up</button>
          </Link>
          <Link to="/Login">
            <button className="login-button-navbar">Login</button>
          </Link>
        </div>
        <div className="profile-container">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            width={65}
            height={65}
            alt="User"
          />
        </div>
      </nav>

      {/* Title */}
      <h1 className="title">Explore</h1>

      {/* Curved Carousel */}
      <div className="carousel">
        <Link to="/PeacockPage">
          <img
            src="https://cdn.britannica.com/37/154237-050-A76A506D/blue-peafowl-tail-Indian-peacock-courtship-displays.jpg"
            alt="Peacock"
          />
        </Link>
        <Link to="/TigerPage">
          <img
            src="https://images.pexels.com/photos/25732289/pexels-photo-25732289.jpeg"
            alt="Tiger"
          />
        </Link>
        <Link to="/NaturePage">
          <img
            src="https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="Nature"
          />
        </Link>
        <Link to="/ArtPage">
          <img
            src="https://assets.wfcdn.com/im/06706424/resize-h600-w600%5Ecompr-r85/2390/239033403/XH1022-9515X+Unusual+Flower+Splash+Abstract+-+Single+Picture+Frame+Painting.jpg"
            alt="Art"
          />
        </Link>
        <Link to="/DolphinPage">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedYu_UqLSH7Dam78aJl7nuLr6BpF4API4meq2qbOHaAA_DgD8b6LnM2APaKG9RanMqLg"
            alt="Dolphin"
          />
        </Link>
        <Link to="/PenguinPage">
          <img
            src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/113557591/320"
            alt="Penguin"
          />
        </Link>
        <Link to="/SnackePage">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyzEVs6b190Enstzxk_sSSautl97h2p5EbThFq7LFecD-f6vxp6UQPgk"
            alt="Snake"
          />
        </Link>
        <Link to="/DressDesignPage">
          <img
            src="https://img.freepik.com/premium-photo/top-view-fashion-designer-working-with-material-sample-hand-drawn-sketch-messy-table-background-top-view-dressmaking-creativity-sewing-workshop-concept_116547-8600.jpg"
            alt="Dress Design"
          />
        </Link>
      </div>

      {/* Reviews Section */}
      <div className="reviews">
        <div className="review-profiles">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User 1"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User 2"
          />
        </div>
        <div className="review-text">
          <h2>20k+ Reviews</h2>
          <p>Customers are satisfied</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
