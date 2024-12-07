import React, { useState, useRef, useEffect } from "react";

interface TTSProps {
  contentRef: React.RefObject<HTMLDivElement>;
  audioSrc: string;
}

const TextToSpeechPlayer: React.FC<TTSProps> = ({ contentRef, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressPercent);

      const currentMinute = Math.floor(audioRef.current.currentTime / 60);
      const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
      setCurrentTime(
        `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
          currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
        }`
      );

      const totalMinute = Math.floor(audioRef.current.duration / 60);
      const totalSeconds = Math.floor(audioRef.current.duration % 60);
      setTotalTime(
        `${totalMinute < 10 ? `0${totalMinute}` : totalMinute}:${
          totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds
        }`
      );
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current) {
      const percent = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  const handleSpeedChange = () => {
    const speeds = [1, 1.2, 1.5, 1.7, 2];
    const currentSpeedIndex = speeds.indexOf(playbackRate);
    const nextSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
    const nextSpeed = speeds[nextSpeedIndex];
    setPlaybackRate(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleTimeUpdate);
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime("00:00");
      });
    }
  }, []);

  return (
    <div className="audio-player" style={playerStyles.audioPlayer}>
      <audio ref={audioRef} src={audioSrc} id="audio" />
      <div className="player-controls" style={playerStyles.playerControls}>
        <button
          id="playAudio"
          onClick={togglePlay}
          className={isPlaying ? "pause" : ""}
          style={{
            ...playerStyles.playButton,
            background: isPlaying
              ? "▶️"
              : "⏸️",
          }}
        ></button>
        <div id="seekObjContainer" onClick={handleSeek} style={playerStyles.seekObjContainer}>
          <div id="seekObj" style={playerStyles.seekObj}>
            <div id="percentage" style={{ ...playerStyles.percentage, width: `${progress}%` }}></div>
          </div>
        </div>
        <button onClick={handleSpeedChange} style={playerStyles.speedButton}>
          {playbackRate}x
        </button>
      </div>
      <div style={playerStyles.timeContainer}>
        <p><small id="currentTime">{currentTime}</small></p>
        <p><small id="totalTime">{totalTime}</small></p>
      </div>
    </div>
  );
};

const playerStyles: { [key: string]: React.CSSProperties } = {
  audioPlayer: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  playerControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  playButton: {
    width: "30px",
    height: "30px",
    border: "none",
    cursor: "pointer",
    backgroundSize: "cover",
  },
  seekObjContainer: {
    flex: "1",
    margin: "0 10px",
    height: "5px",
    backgroundColor: "#e3e3e3",
    borderRadius: "5px",
    position: "relative",
  },
  seekObj: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  percentage: {
    height: "100%",
    backgroundColor: "#0070f3",
    borderRadius: "5px",
    position: "absolute",
    top: "0",
    left: "0",
  },
  speedButton: {
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "#fff",
    cursor: "pointer",
  },
  timeContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 10px",
  },
  ttsSpeaker: {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
  textContainer: {
    maxWidth: "600px",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default TextToSpeechPlayer;