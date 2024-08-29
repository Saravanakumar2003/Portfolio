import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { darkTheme } from '../styles/themes/dark';

interface ThemeContextProps {
  toggleTheme: () => void;
  theme: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  theme: 'dark', 
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark'); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};