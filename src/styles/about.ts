import styled from 'styled-components'

export const InBox = styled.div`
  background-color: ${props => props.theme.backgroundAlt};
  border: 2px solid ${props => props.theme.border};
  padding: 1rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    padding: 1.5rem;
    margin: 2rem 10%;
  }

  @media (min-width: 994px) {
    padding: 2rem;
    margin: 2rem 10%;
  }
`;

export const AboutContainer = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AboutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  @media(min-width: 994px) {
    flex-direction: row-reverse;
    gap: 3rem;
    align-items: start;
    margin-top: 3rem;
  }
`
export const AboutImage = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media(min-width: 994px) {
    align-items: flex-start;
  }
  
  img {
    width: 15rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: fadeInUp 0.8s ease-out;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 2;

    /* Fade in up animation */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
      }
      to {
        opacity: 1;
        transform: translateY(0px) scale(1);
      }
    }

    /* Square line wavers animation */
    @keyframes squareWave {
      0% {
        transform: scale(1) rotate(0deg);
        opacity: 0.3;
      }
      25% {
        transform: scale(1.1) rotate(90deg);
        opacity: 0.6;
      }
      50% {
        transform: scale(0.9) rotate(180deg);
        opacity: 0.4;
      }
      75% {
        transform: scale(1.05) rotate(270deg);
        opacity: 0.7;
      }
      100% {
        transform: scale(1) rotate(360deg);
        opacity: 0.3;
      }
    }

    @keyframes pulseGlow {
      0%, 100% {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(100, 255, 218, 0.3);
      }
      50% {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
                    0 0 40px rgba(100, 255, 218, 0.6);
      }
    }

    /* Hover effects */
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 
                  0 0 50px rgba(100, 255, 218, 0.8);
      border-radius: 20px;
      animation: fadeInUp 0.8s ease-out, pulseGlow 2s ease-in-out infinite;
    }

    /* Square line wavers behind the image */
    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: -30px;
      right: -30px;
      bottom: -30px;
      border: 2px solid rgba(100, 255, 218, 0.4);
      border-radius: 5px;
      z-index: -1;
      animation: squareWave 4s linear infinite;
    }

    /* Second square waver */
    &::after {
      content: '';
      position: absolute;
      top: -50px;
      left: -50px;
      right: -50px;
      bottom: -50px;
      border: 1px solid rgba(100, 255, 218, 0.2);
      border-radius: 10px;
      z-index: -2;
      animation: squareWave 6s linear infinite reverse;
    }

    @media (min-width: 468px) {
      width: 20rem;
    }

    @media (min-width: 994px) {
      width: 23rem;
    }
  }

    @media (min-width: 468px) {
      width: 20rem;
    }

    @media (min-width: 994px) {
      width: 23rem;
    }
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.gray};
      border-top: 2px solid ${props => props.theme.firstColor};
      border-bottom: 2px solid ${props => props.theme.firstColor};
      padding: 2rem 0;
      margin-bottom: 2rem;
      gap: 1rem;

      .dc {
        padding-bottom: 1.5rem;
      }

      .email {
        padding-top: 2rem;
        border-top: 2px solid ${props => props.theme.firstColor};
      }
      
      a {
        display: flex;
        gap: 1rem;
        text-align: start;
        justify-content: flex-start;
        align-items: center;
        
        
        &:hover {
          color: ${props => props.theme.cyan};
        }
        
        @media (min-width: 468px) {
          padding: 0 1.5rem;
          font-size: 1.1rem;
        }
      }
    }
  }
`
export const AboutContact = styled.div`
  @media(max-width: 993px) {
    display: none;
  }

  max-width: 23rem;
  margin-top: 1rem;
  background: ${props => props.theme.backgroundAlt};
  border-radius: 5px;
  padding: 1.6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    margin-bottom: 1.2rem;
    color: ${props => props.theme.textSecondary};
  }

  p {
    color: ${props => props.theme.cyan};
    margin-bottom: .8rem;
  }
`

export const AboutDescription = styled.div`
  padding: 0 1rem;

  @media (min-width: 994px) {
    margin-top: 1.5rem;
  }

  p {
    text-align: start;
    margin-bottom: 1.5rem;
    max-width: 31rem;
  }

`