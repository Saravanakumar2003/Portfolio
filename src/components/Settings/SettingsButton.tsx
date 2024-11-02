import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

interface SettingsProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}


const SettingsContainer = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

const SettingsButton = styled.button`
  background-color: ${({ theme }) => theme.firstColor};
  color: ${({ theme }) => theme.firstColor};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
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
  margin-top: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.firstColor};
  cursor: pointer;
  margin: 0.5rem 0;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.firstColor};
  cursor: pointer;
  margin: 0.5rem 0;
`;

const Settings: React.FC<SettingsProps> = ({ toggleTheme, currentTheme }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const [open, setOpen] = useState(false);
  
    const changeLanguage = (lang: string) => {
      router.push(router.pathname, router.asPath, { locale: lang });
    };
  

  return (
    <SettingsContainer>
      <SettingsButton onClick={() => setOpen(!open)}>
        ⚙️
      </SettingsButton>
      {open && (
        <Dropdown>
            <p>Settings</p>
          <ThemeButton onClick={toggleTheme}>
            {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeButton>
          <LanguageButton onClick={() => changeLanguage('en')}>English</LanguageButton>
          <LanguageButton onClick={() => changeLanguage('ta')}>தமிழ்</LanguageButton>
        </Dropdown>
      )}
    </SettingsContainer>
  );
};

export default Settings;