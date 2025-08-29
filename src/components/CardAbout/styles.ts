import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundSecond};
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 2px solid ${props => props.theme.border};
  position: relative;
  overflow: hidden;
  animation: slideInFromBottom 0.8s ease-out;

  /* Container entrance animation */
  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  /* Subtle background animation on hover */
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
      rgba(100, 255, 218, 0.1),
      transparent
    );
    transition: left 0.8s ease;
  }

  &:hover::before {
    left: 100%;
  }

  .AboutImg {
    width: 350px;
    height: 350px;
    object-fit: cover;
    align-self: center;
    border-radius: 10px;
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

    @media(max-width: 468px) {
      margin-bottom: 2rem;
      
    }

    @media(max-width: 468px) {
      width: 100%;
    }

    @media(min-width: 994px) {
      width: 100%;
      height: 100%;
    }

    @media(min-width: 1200px) {
      width: 100%;
      height: 100%;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: justify;
    max-width: 28rem;
    animation: fadeInLeft 0.8s ease-out 0.3s both;

    /* Content fade in animation */
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
    }

    h2 {
      margin-top: 1rem;
      color: ${props => props.theme.cyan_500};
      animation: glow 2s ease-in-out infinite alternate;
    }

    /* Glow animation for heading */
    @keyframes glow {
      from {
        text-shadow: 0 0 5px ${props => props.theme.cyan_500}40;
      }
      to {
        text-shadow: 0 0 10px ${props => props.theme.cyan_500}60, 
                     0 0 15px ${props => props.theme.cyan_500}40;
      }
    }

    p {
      color: ${props => props.theme.textPrimary};
    }

    li {
      opacity: 0;
      animation: fadeInUp 0.6s ease-out forwards;
    }

    li:nth-child(1) {
      animation-delay: 0.5s;
    }

    li:nth-child(2) {
      animation-delay: 0.7s;
    }

    /* Fade in up animation for list items */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    strong {
      color: ${props => props.theme.gray_easy};

      a {
        color: ${props => props.theme.gray};
        border-bottom: 1px solid ${props => props.theme.gray};


        &:hover {
          color: ${props => props.theme.cyan_400};
          border-bottom: 1px solid ${props => props.theme.cyan_400};
        }
      }
    }

    @media(max-width: 468px) {
      max-width: 100%;
    }

    .aboutButton{
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 1.5rem;
      animation: fadeInUp 0.6s ease-out 0.9s both;

      /* Button hover animations */
      button, a {
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;

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
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        &:hover::before {
          left: 100%;
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      }

      @media(max-width: 468px) {
        flex-direction: column;
      }
    }
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 994px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);

    .AboutImg {
      width: 320px;
    }

    .aboutContent {
      width: 40rem;
      margin-bottom: 3rem;
      font-weight: 500;
      align-items: center;
    }
  }
`
