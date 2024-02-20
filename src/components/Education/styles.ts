import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.backgroundAlt};
`

export const EducationContent = styled.div`
  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    color: ${props => props.theme.firstColor};
  }

  h2 {
    font-size: 1.2rem;
    font-weight: semi-bold;
    color: ${props => props.theme.secondColor};
  }
  
    span {
      color: ${props => props.theme.textSecondary};
      font-size: 1rem;
      text-align: justify;
    }

  p { 
    margin-top: 1.3rem;
    font-size: 1rem;
    text-align: justify;
  }

  ul {
    margin: 1rem 0;

    h3 {
      margin-bottom: .5rem;
      font-size: 1.3rem;
    }

    .tag{
      display: flex;
      gap: .5rem;

      img {
        width: 2rem;
      }
  }
`