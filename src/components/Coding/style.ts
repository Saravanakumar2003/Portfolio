// Make the figure responsive

import styled from 'styled-components';

export const Figure = styled.figure`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row; 
  }

  iframe {
    border: none;
    padding: 10px;
    width: 400px;
    height: 300px;

    @media (min-width: 768px) {
      width: 500px;
    }
  }

`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
  marginleft: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 150px;
    height: 50px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    img {
      width: 200px;
      height: 50px;

    }
  }
`;

