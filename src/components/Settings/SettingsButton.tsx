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
  bottom: 1.3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OvalBar = styled.div`
  background-color: ${({ theme }) => theme.firstColor};
  border-radius: 50px;
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.white};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: ${({ theme }) => theme.secondColor};
  }
`;

const IconButton2 = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.secondColor};
    border-color: ${({ theme }) => theme.secondColor};
    background-color: ${({ theme }) => theme.white};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  bottom: 3rem;
  background-color: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
        <IconButton onClick={toggleAudio}>
          {audioVisible ? <FaPause /> : <FaPlay />}
        </IconButton>
        <IconButton onClick={toggleTheme}>
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </IconButton>
        <IconButton onClick={() => setShowLanguageOptions(!showLanguageOptions)}>
          <Translate />
        </IconButton>
        {showLanguageOptions && (
          <Dropdown>
            <IconButton2 onClick={() => changeLanguage('en')}>EN</IconButton2>
            <IconButton2 onClick={() => changeLanguage('ta')}>TA</IconButton2>
          </Dropdown>
        )}
        <IconButton onClick={() => setShowFontSizeOptions(!showFontSizeOptions)}>
          <MdFormatSize />
        </IconButton>
        {showFontSizeOptions && (
          <Dropdown>
            <IconButton2 onClick={decreaseFontSize}>-</IconButton2>
            <IconButton2 onClick={resetFontSize}>{fontSizePercentage}%</IconButton2>
            <IconButton2 onClick={increaseFontSize}>+</IconButton2>
          </Dropdown>
        )}
      </OvalBar>
      <audio ref={audioRef} src={musicSrc} loop />
    </SettingsContainer>
  );
};

export default Settings;