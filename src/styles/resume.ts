import styled from 'styled-components';


export const PageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;


  iframe {
    width: 100%;
    border: none;
    height: 44.5rem;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundAlt};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
      width: 80%;
      height: 70.4rem;
    }
  }
`;