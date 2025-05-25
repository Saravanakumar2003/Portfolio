import styled from 'styled-components';


export const Box = styled.div`
  display: flex;
  text-transform: uppercase;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .italic {
    font-style: italic;
  }

    h1 {
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

    h3 {
      font-size: 20px;

      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 15px;
      }

      @media (max-width: 500px) {
        font-size: 12px;
      }
    }

     span {
      font-size: 13px;
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
      left: 10px;
      right: 15px;

      @media (max-width: 768px) {
        font-size: 10px;
      }
      @media (max-width: 500px) {
        font-size: 8px;
      }
}

`;

export const Card = styled.div`
  position: relative;
  margin: auto;
  height: 350px;
  width: 600px;
  text-align: center;
  background: linear-gradient(#e96874, #6e3663, #2b0830);
  border-radius: 5px;
  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 30px;

    @media (max-width: 994px) {
    width: 100%;
    height: 300px;
    padding: 20px;
  }

    @media (max-width: 500px) {
    width: 100%;
    height: 250px;
    padding: 20px;
  }

  header {
    position: absolute;
    top: 31px;
    left: 0;
    width: 100%;
    padding: 0 10% 0;
    margin: 0 auto;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    > *:first-child {
      text-align: left;
    }

    > *:last-child {
      text-align: right;
    }
    @media (max-width: 994px) {
      top: 25px;
    }

    @media (max-width: 500px) {
      top: 22px;
    }
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  position: relative;

  :before,
  :after {
    content: '';
    position: absolute;
    top: 50%;
    border-top: 3px solid currentColor;
    transform: translateY(-50%);
    
  }

  :before {
    right: 120px;
    width: 30%;

    @media (max-width: 570px) {
      right: -10px;
      width: 30%;
    }
    
  }

  :after {
    left: 120px;
    width: 30%;

    @media (max-width: 570px) {
      left: -10px;
      width: 30%;
    }
    
  }

  span {
    display: block;
    position: absolute;
    width: 100%;
    top: calc(50% - 1px);
  }
`;

export const Announcement = styled.div`
  position: relative;
  border: 3px solid currentColor;
  border-top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0px;
    border-top: 3px solid currentColor;
    height: 0;
    width: 15px;
  }

  :before {
    left: -3px;
  }

  :after {
    right: -3px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    padding-left: 2rem;
  }
`

export const HomeText = styled.div`
  p {
    color: ${props => props.theme.gray_light};
    @media (max-width: 350px) {
      font-size: 0.9rem;
    }
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }

    span {
      animation: wave-animation 2.1s infinite;
      transform-origin: 70% 70%;
      display: inline-block;

      @keyframes wave-animation {
        0% {
          transform: rotate(0deg);
        }
        10% {
          transform: rotate(14deg);
        }
        20% {
          transform: rotate(-8deg);
        }
        30% {
          transform: rotate(14deg);
        }
        40% {
          transform: rotate(-4deg);
        }
        50% {
          transform: rotate(10deg);
        }
        60% {
          transform: rotate(0deg);
        } /* Reset for the last half to pause */
        100% {
          transform: rotate(0deg);
        }
      }
    }
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: ${props => props.theme.firstColor};
    background: linear-gradient(90deg, #9442fe, #3378ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 350px) {
      font-size: 1.8rem;
    }

    @media (min-width: 768px) {
      font-size: 3.3rem;
    }
  }

  h2 {
    @media (max-width: 668px) {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    color: ${props => props.theme.blue};
    font-weight: 600;
  }

  .animation {
    position: absolute;
    width: 70px;
    height: 70px;

    @media (min-width: 468px) {
      width: 90px;
      height: 90px;
      top: 14%;
    }

    @media (min-width: 994px) {
      width: 120px;
      height: 120px;
    }

    top: 13%;
    left: 5%;
    animation: cubo 7s linear infinite;
    @keyframes cubo {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 1rem;
    }

    @media (min-width: 1200px) {
      gap: 1.5rem;
    }
  }
  .slidingText {
    position: absolute;
    font-size: 50vh;
    bottom: -100px;
    white-space: nowrap;
    color: #ffffff09;
  }
`

export const ImgHome = styled.div`
  position: relative;

  .code {
    position: absolute;
    z-index: -1;
    width: 5rem;
    top: 3rem;

    @media (min-width: 768px) {
      width: 8rem;
      left: 25vw;
    }

    @media (min-width: 994px) {
      left: 70%;
      top: 80%;
    }

    @media (min-width: 1300px) {
      left: 85%;
      top: 70%;
      width: 10rem;
    }
  }

  .home-img {
    display: none;
    @media (min-width: 994px) {
      display: block;
      position: relative;
      width: 32rem;
      -webkit-animation: icon-move-people 4s ease 2s infinite alternate;
      animation: icon-move-people 5s ease 2s infinite alternate;

      @keyframes icon-move-people {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(30px, 60px, 0);
          transform: translate3d(-30px, -50px, 0);
        }
      }
    }
  }
`
