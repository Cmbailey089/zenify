import React from 'react';
import './Videos.css'

const Videos = () => {
  return (
    <div>
      <h2>Browse</h2>
      <div className="videos-container">
        <div className="category">
          <h3>Exercises</h3>
          <div className="video-list">
            <div className="video-wrapper">
            <iframe 
            title="Exercise video 1"
             src="https://www.youtube.com/embed/4pLUleLdwY4"
              allowFullScreen></iframe>
              <span>Exercise Video 1</span>
            </div>
            <div className="video-wrapper">
            <iframe
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise video 2" 
             allowfullscreen></iframe>
              <span>Exercise Video 2</span>
            </div>
            <div className="video-wrapper">
            <iframe
             src="https://www.youtube.com/embed/8TuRYV71Rgo"
              title="Exercise Video 3" 
               allowfullscreen></iframe>
              <span>Exercise Video 3</span>
            </div>
            <div className="video-wrapper">
            <iframe  
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 4" 
             allowfullscreen></iframe>
              <span>Exercise Video 4</span>
            </div>
            <div className="video-wrapper">
            <iframe 
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 5" 
             allowfullscreen></iframe>
              <span>Exercise Video 5</span>
            </div>
            <div className="video-wrapper">
            <iframe  
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 6"
             allowfullscreen></iframe>
              <span>Exercise Video 6</span>
            </div>
            <div className="video-wrapper">
            <iframe 
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 7"
             allowfullscreen></iframe>
              <span>Exercise Video 7</span>
            </div>
            <div className="video-wrapper">
            <iframe  
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 8" 
             allowfullscreen></iframe>
              <span>Exercise Video 8</span>
            </div>
            <div className="video-wrapper">
            <iframe  
            src="https://www.youtube.com/embed/B4kNiCWTl7M" 
            title="Exercise Video 9" 
             allowfullscreen></iframe>
              <span>Exercise Video 9</span>
            </div>
          </div>
        </div>
        
        <div className="category">
          <h3>Meditation</h3>
          <div className="video-list">
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 1"
                src="https://www.youtube.com/embed/inpok4MKVLM"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 1</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 2"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 2</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 3"
                src="https://www.youtube.com/embed/txQ6t4yPIM0"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 3</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 4"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 4</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 5"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 5</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 6"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 6</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 7"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 7</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 8"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 8</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Meditation Video 9"
                src="https://www.youtube.com/embed/6p_yaNFSYao"
                allowFullScreen
              ></iframe>
              <span>Meditation Video 9</span>
            </div>
          </div>
        </div>
        {/* Add more categories with video embed code */}
      </div>
    </div>
  );
};

export default Videos;
