import styled from 'styled-components'
import { rgba } from 'polished'

export const ProjectsContainer = styled.section`
  position: relative;
`

export const ProjectsContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -3rem;

  .search {
    margin-bottom: 2rem;
    width: 90vw;
    max-width: 650px;

    p {
      margin-bottom: 1rem;
    }

    .input {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 1rem;
      border-radius: 10px;
      border: solid 2px ${props => props.theme.gray_easy};

      input {
        width: 100%;
        font-size: 1rem;
        background: none;
        outline: none;
        border: none;

        ::placeholder {
        }
      }
    }
  }

  .not-found {
    margin-top: 2rem;
  }

  .border {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
    border-top: 1px solid ${props => props.theme.gray_easy};
  }

  .github{
    text-align: center;
    margin-top: 5rem;

    a {
      border-bottom: 1px solid ${props => props.theme.firstColor};

      &:hover {
        border-bottom: 1px solid ${props => props.theme.hover};
      }
    }
  }
`

export const ProjectsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 2rem;

  @media (min-width: 994px) {
    flex-direction: row;
  }

  .banner {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0.5rem;
    }
  }

  .title {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .description {
    max-width: 30rem;
    text-align: justify;

    p {
      margin: 1.5rem 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      column-gap: 0.5rem;
      row-gap: 0.5rem;
      margin-bottom: 2.5rem;

      span {
        background: ${props => rgba(props.theme.color, 0.8)};
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
`
