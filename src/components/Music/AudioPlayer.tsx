import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer: React.FC<{ audioSrc: string }> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef<HTMLAudioElement>();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <audio ref={audioRef} src={audioSrc} style={{ flex: 1 }} loop={true}/>
      <button 
        onClick={togglePlay} 
        style={{ 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: '40px', 
            height: '40px', 
            borderRadius: '20%',
            backgroundColor: 'white', 
            color: 'black', 
            cursor: 'pointer',
            position: 'fixed',
            bottom: '4.5rem',
            left: '3.55rem',
            zIndex: '1000',
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AudioPlayer;