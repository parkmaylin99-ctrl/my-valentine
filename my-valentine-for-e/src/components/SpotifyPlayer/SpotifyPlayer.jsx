import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div style={{ marginTop: '20px', width: '100%', maxWidth: '400px' }}>
      <iframe
      
  className="music"
        style={{ borderRadius: '15px'}}
        src="https://open.spotify.com/embed/track/1oAwsWBovWRIp7qLMGPIet?si=e674a61a80d5452a" // Замени на ссылку своей песни
        width="100%"
        height="152"
        frameBorder="none"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Favorite Song"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;