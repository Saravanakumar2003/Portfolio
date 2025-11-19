import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaPlay, FaPause } from 'react-icons/fa';
import { Translate } from 'phosphor-react'
import { MdFormatSize } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface SettingsProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const SettingsContainer = styled.div`
  position: fixed;
  bottom: 1.4rem;
  right: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: floatUp 0.8s ease-out 0.5s forwards;

  @keyframes floatUp {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(20px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
  }
`;

const OvalBar = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.firstColor}E6 0%, 
    ${({ theme }) => theme.firstColor}CC 50%, 
    ${({ theme }) => theme.firstColor}E6 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 50px;
  display: flex;
  padding: 0.32rem 0.2rem;
  gap: 0.5rem;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.white}40;
  box-shadow: 
    0 6px 24px rgba(0, 0, 0, 0.2),
    0 0 0 1px ${({ theme }) => theme.firstColor}30,
    inset 0 1px 0 ${({ theme }) => theme.white}20;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.white}20,
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 
      0 8px 28px rgba(0, 0, 0, 0.25),
      0 0 0 1px ${({ theme }) => theme.firstColor}50,
      inset 0 1px 0 ${({ theme }) => theme.white}30;
    border-color: ${({ theme }) => theme.white}60;

    &::before {
      left: 100%;
    }
  }

  /* Subtle floating animation */
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-2px);
    }
  }
`;

const IconButton = styled.button`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.white}15 0%, 
    ${({ theme }) => theme.white}05 100%
  );
  border: 1px solid ${({ theme }) => theme.white}20;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${({ theme }) => theme.white}20 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    color: ${({ theme }) => theme.secondColor};
    transform: translateY(-1px) scale(1.05);
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.white}25 0%, 
      ${({ theme }) => theme.white}10 100%
    );
    border-color: ${({ theme }) => theme.secondColor}40;
    box-shadow: 
      0 6px 16px rgba(0, 0, 0, 0.2),
      0 0 15px ${({ theme }) => theme.secondColor}25;

    &::before {
      opacity: 1;
    }

    svg {
      transform: scale(1.1);
      filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
    transition: all 0.1s ease;
  }

  /* Pulse animation for active states */
  &.active {
    animation: pulse 2s infinite;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.secondColor}30 0%, 
      ${({ theme }) => theme.secondColor}15 100%
    );
    border-color: ${({ theme }) => theme.secondColor}60;
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 
        0 6px 16px rgba(0, 0, 0, 0.2),
        0 0 15px ${({ theme }) => theme.secondColor}25;
    }
    50% {
      box-shadow: 
        0 6px 16px rgba(0, 0, 0, 0.2),
        0 0 20px ${({ theme }) => theme.secondColor}35;
    }
  }
`;

const IconButton2 = styled.button`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.2) 0%, 
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 2px solid rgba(100, 255, 218, 0.4);
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.2rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(100, 255, 218, 0.3),
      transparent
    );
    transition: left 0.4s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.firstColor};
    background: linear-gradient(135deg, 
      rgba(100, 255, 218, 0.9) 0%, 
      rgba(100, 255, 218, 0.8) 100%
    );
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(100, 255, 218, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
    transition: all 0.1s ease;
  }

  /* Special styling for percentage display */
  &.percentage {
    background: linear-gradient(135deg, 
      rgba(100, 255, 218, 0.2) 0%, 
      rgba(100, 255, 218, 0.1) 100%
    );
    border-color: rgba(100, 255, 218, 0.6);
    color: ${({ theme }) => theme.firstColor};
    font-weight: 700;
  }
`;

const Dropdown = styled.div`
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, 
    rgba(2, 6, 23, 0.95) 0%, 
    rgba(15, 23, 42, 0.95) 50%,
    rgba(2, 6, 23, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: ${({ theme }) => theme.white};
  border-radius: 16px;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border: 2px solid ${({ theme }) => theme.firstColor}40;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 0 1px ${({ theme }) => theme.firstColor}30,
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 40px ${({ theme }) => theme.firstColor}20;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  animation: dropdownSlideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(2, 6, 23, 0.95);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.firstColor}40;
    z-index: 2;
  }

  /* Show dropdown when parent has .active class */
  .active ~ & {
    opacity: 1;
    pointer-events: all;
  }

  @keyframes dropdownSlideUp {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px) scale(0.9);
      pointer-events: none;
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
      pointer-events: all;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    position: fixed;
    bottom: 4.5rem;
    left: 50%;
    transform: none;
    max-width: calc(100vw - 2rem);
    
    &::before, &::after {
    }
  }
`;

const Small = styled.small`
  color: ${({ theme }) => theme.secondColor};
  font-size: 0.5rem;
  text-align: center;
`;

const Settings: React.FC<SettingsProps> = ({ toggleTheme, currentTheme }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [audioVisible, setAudioVisible] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [showFontSizeOptions, setShowFontSizeOptions] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 2);
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => (prevSize > 10 ? prevSize - 2 : prevSize));
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  const resetFontSize = () => {
    setFontSize(16);
    document.documentElement.style.fontSize = '16px';
  };

  const musicSrc = '/music/in-slow-motion-inspiring-ambient-lounge-219592.mp3';

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioVisible) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioVisible(!audioVisible);
    }
  };

  const fontSizePercentage = Math.round((fontSize / 16) * 100);

  return (
    <SettingsContainer>
      <OvalBar>
        <IconButton 
          onClick={toggleAudio}
          className={audioVisible ? 'active' : ''}
          title={audioVisible ? 'Pause Music' : 'Play Music'}
        >
          {audioVisible ? <FaPause /> : <FaPlay />}
        </IconButton>
        <IconButton 
          onClick={toggleTheme}
          title={currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </IconButton>
        <IconButton 
          onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          className={showLanguageOptions ? 'active' : ''}
          title="Change Language"
        >
          <Translate />
        </IconButton>
        <IconButton 
          onClick={() => setShowFontSizeOptions(!showFontSizeOptions)}
          className={showFontSizeOptions ? 'active' : ''}
          title="Adjust Font Size"
        >
          <MdFormatSize />
        </IconButton>
      </OvalBar>
      
      {/* Language Dropdown */}
      {showLanguageOptions && (
        <Dropdown style={{ opacity: 1, pointerEvents: 'all' }}>
          <IconButton2 onClick={() => changeLanguage('en')}>English</IconButton2>
          <IconButton2 onClick={() => changeLanguage('ta')}>தமிழ்</IconButton2>
        </Dropdown>
      )}
      
      {/* Font Size Dropdown */}
      {showFontSizeOptions && (
        <Dropdown style={{ opacity: 1, pointerEvents: 'all' }}>
          <IconButton2 onClick={decreaseFontSize} title="Decrease Font Size">A−</IconButton2>
          <IconButton2 onClick={resetFontSize} title="Reset Font Size" className="percentage">{fontSizePercentage}%</IconButton2>
          <IconButton2 onClick={increaseFontSize} title="Increase Font Size">A+</IconButton2>
        </Dropdown>
      )}
      
      <audio ref={audioRef} src={musicSrc} loop />
    </SettingsContainer>
  );
};

export default Settings;