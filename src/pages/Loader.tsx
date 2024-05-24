// Loader.tsx
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import logo from '../../public/Logo1.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


const fireworks = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #020617;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  animation: ${fireworks} 1s ease-in-out infinite;
`;

const Name = styled.h1`
  font-size: 2em;
  color: #00D9FF;
  animation: ${fireworks} 1s ease-in-out infinite;
`;

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(oldProgress => {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                return Math.min(oldProgress + 100 / 120, 100);
            });
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <LoaderContainer>
                <Name>Welcome to</Name>
                <Logo src={logo.src} alt="Logo" />
                <Name>Saravanakumar's Portfolio</Name>
                <Name>Loading: {progress.toFixed(0)}%</Name>
            </LoaderContainer>
        </>
    );
};

export default Loader;