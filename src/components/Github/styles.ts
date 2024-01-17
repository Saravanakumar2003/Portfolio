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

export const BoxWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
        gap: 0.5rem;
    }
    `;