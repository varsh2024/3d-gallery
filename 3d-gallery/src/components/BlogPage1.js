import React from "react";
import "./BlogPage.css";
import img from './img.jpg';
import imgs1 from './view-over-colorful-flowers-garden-springtime-victoria-canada-butchart-gardens-sunken-spring-111524495.webp';
import imgs from './medium-shot-man-wearing-vr-glasses_23-2149126949.avif';
import imgs2 from './imges(3).jpg';
import imgs4 from './download.jpg';
import imgs5 from './download (1).jpg';
import imgs6 from './images (4).jpg';
import { FaArrowRight, FaQuoteLeft, FaEnvelope } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="header">
        <h1>Welcome to Our Blog</h1>
        <p>Explore the latest trends, insights, and updates.</p>
        <button className="explore-btn">Explore Now</button>
      </header>

      {/* Featured Blogs Section */}
      <section className="featured-section">
        <h2>Featured Blogs</h2>
        <div className="featured-container">
          <div className="featured-post">
            <img src="https://www.potential.com/wp-content/uploads/2022/12/Blog-Innovation.png?innovation" alt="Innovation" width={350} height={200} />
            <h3>Innovation in AI</h3>
            <p>How AI is transforming businesses globally.</p>
            <button className="read-more">
              Read More <FaArrowRight />
            </button>
          </div>
          <div className="featured-post">
            <img src={img} alt="Startup" width={350} height={200} />
            <h3>Startup Growth</h3>
            <p>Top 10 tips for scaling your startup effectively.</p>
            <button className="read-more">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        <h2>Latest Articles</h2>
        <div className="post">
          <img src={imgs} alt="Tech" width={350} height={200} />
          <h3>Latest Technology Trends</h3>
          <p>Stay updated with the newest innovations in tech.</p>
          <button className="read-more">
            Read More <FaArrowRight />
          </button>
        </div>
        <div className="post">
          <img src={imgs1} alt="Nature" />
          <h3>The Beauty of Nature</h3>
          <p>Explore the mesmerizing beauty of nature and landscapes.</p>
          <button className="read-more">
            Read More <FaArrowRight />
          </button>
        </div>
        <div className="post">
          <img src={imgs2} alt="Business" width={350} height={200} />
          <h3>Business Strategies</h3>
          <p>Learn about innovative business strategies and success stories.</p>
          <button className="read-more">
            Read More <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Readers Say</h2>
        <div className="testimonial">
          <FaQuoteLeft className="quote-icon" />
          <p>"This blog has been a game-changer for my business. The insights are top-notch!"</p>
          <h4>- Emily Carter</h4>
        </div>
        <div className="testimonial">
          <FaQuoteLeft className="quote-icon" />
          <p>"I always find the latest tech news here before anyone else. Highly recommended!"</p>
          <h4>- Mark Thompson</h4>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get weekly updates on the latest blog posts and trends.</p>
        <div className="subscription">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">
            Subscribe <FaEnvelope />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src={imgs4} alt="Team Member" />
            <p>Jane Doe - Content Writer</p>
          </div>
          <div className="member">
            <img src={imgs5} alt="Team Member" />
            <p>John Smith - Editor</p>
          </div>
          <div className="member">
            <img src={imgs6} alt="Team Member" />
            <p>Sarah Johnson - Designer</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>We bring you the latest trends, insights, and updates on technology, business, and lifestyle.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: support@myblog.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        <p className="footer-bottom">© 2025 My Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
