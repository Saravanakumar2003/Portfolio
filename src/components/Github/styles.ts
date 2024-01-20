import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 1em;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Video = styled.iframe`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Link = styled.a`
  color: #38bdf8;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
`;

const Button = styled.button`
  font-size: 1em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #38bdf8;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin: 0.5em;

  &:hover {
    background-color: #3178c6;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`;

export const GithubContainer = styled.div`
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '200px',
width: '500px',
border: '1px solid #ffff',
borderRadius: '5px',
marginBottom: '3rem',
`;