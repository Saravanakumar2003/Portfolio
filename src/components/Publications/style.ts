//Style for Publications component


import styled, { keyframes } from 'styled-components';
// Style for Publications component

export const PublicationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 8rem;
  margin-right: 8rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const PublicationCardContainer = styled.div`
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }
    
`;

export const PublicationTitle = styled.h1`
    color: #00D9FF;
    text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const PublicationAuthors = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PublicationDate = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PublicationSource = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PublicationLink = styled.a`
  font-size: 1.1rem;
  color: #0070f3;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PublicationDescription = styled.p`
text-align: justify;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Style for ORCID component

export const ORCIDContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ORCIDLink = styled.a`
  margin-left: 0.5rem;
  color: #0070f3;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;


