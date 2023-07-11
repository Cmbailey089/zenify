import React from 'react';
import backgroundImg from '../AboutUs/codimg.jpg';
import './AboutUsStyles.css';

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="background">
        <img src={backgroundImg} alt="Background" />
      </div>
      <h2>Team</h2>
      <div className="Member">
        <div className="card">
          <h3 className="Christopher">Christoper</h3>
          <p className="answer">
            {/* Christoper info would go here */}
          </p>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="Corbin">Corbin</h3>
          <p className="answer">
            {/* Corbin info would go here */}
          </p>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="Jacob">Jacob</h3>
          <p className="answer">
            {/* Jacob info would go here */}
          </p>
        </div>
      </div>
      {/* Add more Members here */}
      <div className="Member">
        <div className="card">
          <h3 className="John">John</h3>
          <p className="answer">
            {/* John info would go here */}
          </p>
        </div>
      </div>
      <div className="Member">
        <div className="card">
          <h3 className="Gabriela">Gabriela</h3>
          <p className="answer">
            {/* Gabriela info would go here */}
          </p>
        </div>
      </div>
      {/* Add more Members here */}
    </div>
  );
};

export default AboutUs;
