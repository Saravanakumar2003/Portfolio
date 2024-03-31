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
`;

export const PublicationCardContainer = styled.div`
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
`;

export const PublicationTitle = styled.h1`
    color: #00D9FF;
    text-align: justify;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const PublicationAuthors = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const PublicationDate = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const PublicationSource = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const PublicationLink = styled.a`
  font-size: 1.1rem;
  color: #0070f3;
`;

export const PublicationDescription = styled.p`
text-align: justify;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
`;

// Style for ORCID component

export const ORCIDContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  font-size: 1.2rem;
`;

export const ORCIDLink = styled.a`
  margin-left: 0.5rem;
  color: #0070f3;
`;

