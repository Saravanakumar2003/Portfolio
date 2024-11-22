import styled from 'styled-components';

export const TermsAndConditionsContainer = styled.main`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.textPrimary};

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.firstColor};
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.secondColor};
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.firstColor};
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: ${props => props.theme.firstColor};
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.hover};
    }
  }
`;