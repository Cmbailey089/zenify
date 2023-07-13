import React from 'react';
import backgroundImg from '../AboutUs/codimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './AboutUsStyles.css';
import gabrielaImg from './Icons/Gabriela.png';
import chrisImg from './Icons/Chris.png';
import jacobImg from './Icons/Jacob.png';
import johnImg from './Icons/John.png';
import corbinImg from './Icons/Corbin.png';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="background">
        <img src={backgroundImg} alt="Background" />
      </div>
      <h2>Team</h2>
      <div className="Member">
        <div className="card">
          <h3 className="Christopher">Christopher</h3>
          <img src={chrisImg} alt="Christopher" className="profile-img" />
          <div className="social-media-icons">
            <a href="https://twitter.com/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
            <a href="https://instagram.com/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="jacob">Jacob</h3>
          <img src={jacobImg} alt="Jacob" className="profile-img" />
          <div className="social-media-icons">
            <a href="https://twitter.com/Jacob" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
            <a href="https://instagram.com/Jacob" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/Jacob" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="corbin">Corbin</h3>
          <img src={corbinImg} alt="Corbin" className="profile-img" />
          <div className="social-media-icons">
            <a href="https://twitter.com/Corbin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
            <a href="https://instagram.com/Corbin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/Corbin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> Linkedin
            </a>
          </div>
        </div>
      </div>
    
      <div className="Member">
        <div className="card">
          <h3 className="John">John</h3>
          <img src={johnImg} alt="Christopher" className="profile-img" />
          <div className="social-media-icons">
            <a href="https://twitter.com/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
            <a href="https://instagram.com/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/Christopher" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="Gabriela">Gabriela</h3>
          <img src={gabrielaImg} alt="Gabriela" className="profile-img" />
          <div className="social-media-icons">
            <a href="https://twitter.com/gabriela" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
            </a>
            <a href="https://instagram.com/gabriela" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
            </a>
            <a href="https://linkedin.com/in/gabriela" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" /> Linkedin
            </a>
          </div>
        </div>
      </div>
      {/* Add more Members here */}
    </div>
  );
};

export default AboutUs;
