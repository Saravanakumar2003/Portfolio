import React, { useState, useEffect, useRef } from "react";

interface TTSProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const TextToSpeechPlayer: React.FC<TTSProps> = ({ contentRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSynth, setSpeechSynth] = useState<SpeechSynthesisUtterance | null>(null);
  const [highlightedWordIndex, setHighlightedWordIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0); // Track progress for the slider
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null); // Store the selected voice
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const [isPaused, setIsPaused] = useState(false); // Track if speech is paused
  const sliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-Speech is not supported in your browser.");
    }

    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find((voice) => voice.name.toLowerCase().includes("female"));
    setVoice(femaleVoice || voices[4]); // Default to first voice if no female voice found
  }, []);

  const extractVisibleText = () => {
    if (!contentRef.current) return "";
    return contentRef.current.innerText || "";
  };

  const playSpeech = () => {
    const text = extractVisibleText();
    if (!text) {
      alert("No text available to read!");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;

    setProgress(0);
    setIsPaused(false);

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const wordIndex = event.charIndex / (text.length / text.split(" ").length);
        setHighlightedWordIndex(Math.floor(wordIndex));
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setHighlightedWordIndex(null);
      setProgress(100); // Reset progress when the speech ends
    };

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onmark = (event) => {
      if (sliderRef.current) {
        const progressPercent = (event.elapsedTime / utterance.text.length) * 100;
        setProgress(progressPercent);
      }
    };

    window.speechSynthesis.cancel(); // Stop any ongoing speech
    window.speechSynthesis.speak(utterance);
    setUtterance(utterance);
  };

  const pauseSpeech = () => {
    if (isPlaying && utterance) {
      setIsPlaying(false);
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const resumeSpeech = () => {
    if (isPaused && utterance) {
      setIsPlaying(true);
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  };

  const stopSpeech = () => {
    if (utterance) {
      setIsPlaying(false);
      window.speechSynthesis.cancel();
      setHighlightedWordIndex(null);
      setProgress(0);
    }
  };

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (utterance) {
      setProgress(value);

      // Create a new utterance to reset from the beginning
      const newUtterance = new SpeechSynthesisUtterance(extractVisibleText());
      newUtterance.voice = voice || null;
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(newUtterance); // Restart the speech

      // Set the progress slider to the correct position
      setProgress(value);
    }
  };

  return (
    <div style={playerStyles.container}>
      <button
        onClick={isPlaying ? pauseSpeech : playSpeech} // Toggle between play and pause
        style={playerStyles.button}
      >
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <button onClick={stopSpeech} style={playerStyles.button}>
        ⏹ Stop
      </button>

      {/* Progress slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSliderChange}
        style={playerStyles.slider}
        ref={sliderRef}
      />
      
      <div ref={contentRef} style={playerStyles.textContainer}>
        {/* Render the visible text */}
      </div>
    </div>
  );
};

const playerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    background: "#f3f4f6",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  slider: {
    width: "200px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  textContainer: {
    maxWidth: "600px",
    padding: "10px",
  },
};

export default TextToSpeechPlayer;
