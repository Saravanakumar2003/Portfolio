import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Temporary variable that resets on page refresh
let hasShownLoadingInThisPageLoad = false;

export const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading');
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only skip if loading has been shown in this specific page load session
    if (!hasShownLoadingInThisPageLoad) {
      setShouldShow(true);
      // Mark that loading screen has been shown for this page load
      hasShownLoadingInThisPageLoad = true;
    } else {
      // Skip loading screen, immediately call completion
      onLoadingComplete();
      return;
    }
  }, [onLoadingComplete]);

  useEffect(() => {
    if (!shouldShow) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete, shouldShow]);

  useEffect(() => {
    if (!shouldShow) return;

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === 'Loading...') return 'Loading';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(textInterval);
  }, [shouldShow]);

  // Don't render anything if loading screen shouldn't show
  if (!shouldShow) {
    return null;
  }

  return (
    <LoadingContainer>
      <LoadingContent>
        <LogoContainer>
          <AnimatedLogo><img width="50" height="50" src="/Logo1.png" alt="Logo" /></AnimatedLogo>
          <LogoText>Welcome</LogoText>
        </LogoContainer>
        
        <ProgressContainer>
          <ProgressBar progress={progress} />
          <ProgressText>{Math.floor(progress)}%</ProgressText>
        </ProgressContainer>
        
        <LoadingTextElement>{loadingText}</LoadingTextElement>
        
        <FloatingElements>
          <FloatingDot delay={0} />
          <FloatingDot delay={0.5} />
          <FloatingDot delay={1} />
          <FloatingDot delay={1.5} />
        </FloatingElements>
      </LoadingContent>
    </LoadingContainer>
  );
};

LoadingScreen.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const logoAnimation = keyframes`
  0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
  50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const progressAnimation = keyframes`
  0% { width: 0%; }
`;

const floatingAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(100, 255, 218, 0.3); }
  50% { box-shadow: 0 0 40px rgba(100, 255, 218, 0.8); }
`;

// Styled Components
const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-out;
`;

const LoadingContent = styled.div`
  text-align: center;
  color: white;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

const AnimatedLogo = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: #64ffda;
  margin-right: 0.5rem;
  animation: ${logoAnimation} 1.5s ease-out, ${pulseGlow} 2s infinite;
  border: 2px solid #64ffda;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    width: 60px;
    height: 60px;
  }
`;

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: #ccd6f6;
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProgressContainer = styled.div`
  width: 300px;
  margin: 2rem auto;
  animation: ${fadeIn} 1s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #233554;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #64ffda, #4facfe);
    border-radius: 2px;
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  }
`;

const ProgressText = styled.div`
  font-size: 1.2rem;
  color: #64ffda;
  font-weight: 500;
`;

const LoadingTextElement = styled.div`
  font-size: 1rem;
  color: #8892b0;
  margin-top: 1rem;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  pointer-events: none;
`;

const FloatingDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: #64ffda;
  border-radius: 50%;
  animation: ${floatingAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  &:nth-child(1) { top: 20%; left: 10%; }
  &:nth-child(2) { top: 60%; left: 80%; }
  &:nth-child(3) { top: 40%; left: 20%; }
  &:nth-child(4) { top: 80%; left: 70%; }
`;