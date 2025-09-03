import styled from "styled-components"

export const SkillsContainer = styled.div`
  display: grid;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media (min-width: 420px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

`

export const SkillsContent = styled.div`
  width: 12rem;
  height: 10rem;
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.border};
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  animation: skillCardEntrance 0.6s ease-out forwards;
  cursor: pointer;

  /* Staggered entrance animation based on nth-child */
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.25s; }
  &:nth-child(5) { animation-delay: 0.3s; }
  &:nth-child(6) { animation-delay: 0.35s; }
  &:nth-child(7) { animation-delay: 0.4s; }
  &:nth-child(8) { animation-delay: 0.45s; }
  &:nth-child(9) { animation-delay: 0.5s; }
  &:nth-child(10) { animation-delay: 0.55s; }
  &:nth-child(11) { animation-delay: 0.6s; }
  &:nth-child(12) { animation-delay: 0.65s; }
  &:nth-child(13) { animation-delay: 0.7s; }
  &:nth-child(14) { animation-delay: 0.75s; }
  &:nth-child(15) { animation-delay: 0.8s; }

  @keyframes skillCardEntrance {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Enhanced hover effects */
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 0 30px ${(props) => props.color}40;
    border-color: ${(props) => props.color};

    h4 {
      color: ${(props) => props.color};
      transform: scale(1.1);
    }

    img {
      transform: scale(1.15) rotate(5deg);
      filter: drop-shadow(0 5px 15px ${(props) => props.color}30);
    }

    .border::before {
      animation-play-state: paused;
      background: linear-gradient(45deg, 
        ${(props) => props.color}, 
        ${(props) => props.color}80,
        ${(props) => props.color}
      );
    }

    &::before {
      opacity: 1;
      transform: scale(1.2);
    }

    &::after {
      opacity: 0.8;
    }
  }

  /* Background glow effect */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, 
      transparent, 
      ${(props) => props.color}20, 
      transparent, 
      ${(props) => props.color}10,
      transparent
    );
    border-radius: 28px;
    z-index: -1;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.4s ease;
  }

  /* Subtle pulse effect */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${(props) => props.color}10 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: -1;
  }

  h4 {
    z-index: 1;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 600;
  }

  img {
    z-index: 1;
    object-fit: contain;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  }

  .border {
    &::before{
      content: '';
      position: absolute;
      width: 5rem;
      height: 17rem;
      left: 4.5rem;
      top: -40%;
      background: ${(props) => props.color};
      animation: barra 8s linear 0s infinite normal none running;
      border-radius: 10px;
      opacity: 0.6;
      transition: all 0.4s ease;
  
      @keyframes barra {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      inset: 5px;
      background: ${props => props.theme.backgroundAlt};
      border-radius: 20px;
      transition: all 0.3s ease;
    }
  }

  /* Click animation */
  &:active {
    transform: translateY(-5px) scale(0.98);
    transition: all 0.1s ease;
  }

`

export const Vector = styled.div`
  position: relative;
  z-index: -10;
  width: 90vw;
  top: -20vw;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @media (min-width: 468px) {
    top: 1vw;
  }

  .js {
    position: absolute;
    right: 0vw;
  }

  .html {
    position: absolute;
    left: 0vw;
  }
`