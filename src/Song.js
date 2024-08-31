// Song.js
import React from 'react';
import './Song.css';

export default function Song() {
  return (
    <div className="song-container">
      <div className="song-image">
        <img src={process.env.PUBLIC_URL + '/shapeOfYou.png'} alt="Shape of You" />
      </div>
      <div className="song-info">
        <h2>Shape of You</h2>
        <p>Ed Sheeran</p>
        <div className="controls">
          <button className="control-button"><img src='/previousButton.png' alt="Previous" ></img></button>
          <button className="control-button"><img src='/playButton.png' alt="Play" ></img></button>
          <button className="control-button"><img src='/nextButton.png' alt="next" ></img></button>
        </div>
        <div className="actions">
          <button className="action-button"><img src='/downloadButton.png' alt="downloads" ></img></button>
          <button className="action-button"><img src='/favouritesButton.png' alt="favourites" ></img></button>
          <button className="action-button"><img src='/playlistButton.png' alt="playlist" ></img></button>
        </div>
      </div>
    </div>
  );
}
