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
                title="Exercise Video 1"
                src="https://www.youtube.com/embed/dKoflTzvZpk"
                allowFullScreen
              ></iframe>
              <span>Exercise Video 1</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Exercise Video 2"
                src="https://www.youtube.com/embed/6X8Tz9a5Igk"
                allowFullScreen
              ></iframe>
              <span>Exercise Video 2</span>
            </div>
            <div className="video-wrapper">
              <iframe
                title="Exercise Video 3"
                src="https://www.youtube.com/embed/PH8PlsXvemo"
                allowFullScreen
              ></iframe>
              <span>Exercise Video 3</span>
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
          </div>
        </div>
        {/* Add more categories with video embed code */}
      </div>
    </div>
  );
};

export default Videos;
