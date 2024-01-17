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

  .AboutImg {
    width: 350px;
    height: 350px;
    object-fit: cover;
    align-self: center;
    border-radius: 10px;

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

    h2 {
      margin-top: 1rem;
      color: ${props => props.theme.cyan_500};
    }

    p {
      color: ${props => props.theme.textPrimary};
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
