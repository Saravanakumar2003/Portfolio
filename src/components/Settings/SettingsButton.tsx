import React, { useState } from 'react';
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
  margin-right: 1rem;
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
}
  hr {
    border: 0.5px solid ${({ theme }) => theme.firstColor};
    margin: 0.5rem 0;
  }
`;


const LanguageButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.firstColor};
  cursor: pointer;
  margin: 0.5rem 0;
  font-size: 0.7rem;
`;

const ThemeButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.firstColor};
  cursor: pointer;
  border-radius: 5px;
  padding: 0.3rem 0.3rem;
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
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const Settings: React.FC<SettingsProps> = ({ toggleTheme, currentTheme }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [audioVisible, setAudioVisible] = useState(false);

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  const musicSrc = '/music/in-slow-motion-inspiring-ambient-lounge-219592.mp3';

  return (
    <SettingsContainer>
      <SettingsButton onClick={() => setOpen(!open)}>
        ⚙️
      </SettingsButton>
      {open && (
        <Dropdown>
          <p style={{ textAlign: 'center' }}>Settings</p>
          <hr />
          <Text style={{ textAlign: 'center' }}>Play Music</Text>
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
        </Dropdown>
      )}
      {audioVisible && (
        <ThemeButton style={{ alignSelf: 'center', margin: '' }}>
          <AudioPlayer audioSrc={musicSrc} />
        </ThemeButton>
      )}
    </SettingsContainer>
  );
};

export default Settings;