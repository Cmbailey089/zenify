import React from 'react';
import './Home.css';
import backgroundImg from '../Images/desktop-wallpaper-stress-relief-background-44305.jpg';

const Home = () => {
  const token = localStorage.getItem('id_token');
  const loggedIn = !!token;

  return (
    <div className="home-container">
      <div className="background">
        <img src={backgroundImg} alt="Background" />
      </div>
      <div className="content">
        <h1>Welcome to the Stress Relief Application</h1>
        <p>
          Discover various techniques and resources to manage stress and find relaxation in your daily life. Our application offers a range of stress relief practices, including meditation, breathing exercises, mindfulness, and more.
        </p>
        {!loggedIn && <button className="get-started-btn">Get Started</button>}
        {loggedIn && (
          <div className="features">
            <div className="feature-item">
              <h3>Stress Management Tips</h3>
              <p>Explore helpful tips and strategies to effectively manage stress in your life.</p>
            </div>
            <div className="feature-item">
              <h3>Guided Meditation</h3>
              <p>Experience guided meditation sessions to relax your mind and reduce stress levels.</p>
            </div>
            <div className="feature-item">
              <h3>Breathing Exercises</h3>
              <p>Learn different breathing techniques that can help calm your mind and relieve stress.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
