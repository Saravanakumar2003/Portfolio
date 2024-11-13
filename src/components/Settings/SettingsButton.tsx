import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import AudioPlayer from '../Music/AudioPlayer';

interface SettingsProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}

const SettingsContainer = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 1000;
  align-self: center;
`;

const SettingsButton = styled.button`
  background-color: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.firstColor};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 1rem;
  }
  hr {
    border: 0.5px solid ${({ theme }) => theme.firstColor};
  }
`;

const LanguageButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 5px;
  padding: 0.5rem 5rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.firstColor};
  font-size: 0.8rem;
`;

const AudioToggleButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 5px;
  padding: 0.5rem 5rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const FontSizeButton = styled.button`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  border: 1px solid ${({ theme }) => theme.firstColor};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const FontSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

`;

const Settings: React.FC<SettingsProps> = ({ toggleTheme, currentTheme }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);
  const [fontSize, setFontSize] = useState(16);

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

  return (
    <SettingsContainer>
      <SettingsButton onClick={() => setOpen(!open)}>
        ⚙️
      </SettingsButton>
      {open && (
        <Dropdown>
          <p style={{ textAlign: 'center' }}>Settings</p>
          <hr />
          <Text style={{ textAlign: 'center' }}>Play some music</Text>
          <AudioToggleButton onClick={() => setAudioVisible(!audioVisible)}>
            {audioVisible ? 'Hide Player' : 'Show Player'}
          </AudioToggleButton>
          <hr />
          <Text style={{ textAlign: 'center' }}>Change Theme</Text>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeButton>
          <hr />
          <Text style={{ textAlign: 'center' }}>Change Language</Text>
          <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
          <LanguageButton onClick={() => changeLanguage('ta')}>தமிழ்</LanguageButton>
          <hr />
          <Text style={{ textAlign: 'center' }}>Font Size</Text>
          <FontSizeContainer>
            <FontSizeButton onClick={decreaseFontSize}>-</FontSizeButton>
            <FontSizeButton onClick={resetFontSize}>Default</FontSizeButton>
            <FontSizeButton onClick={increaseFontSize}>+</FontSizeButton>
          </FontSizeContainer>
          <hr />
        </Dropdown>
      )}
      {audioVisible && (
      <AudioPlayer audioSrc={musicSrc} />
      )}
    </SettingsContainer>
  );
};

export default Settings;