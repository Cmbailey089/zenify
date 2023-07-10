import React from 'react';

const VideoLogo = () => {
  return (
    <video autoPlay loop muted>
      <source src="/media/VideoLogo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoLogo;