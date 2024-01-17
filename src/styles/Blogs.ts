import styled from 'styled-components'
import { rgba } from 'polished'

export const BlogContainer = styled.section`
  position: relative;
`

export const BlogContent = styled.section`
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
      color: ${props => props.theme.gray_easy};
      margin-bottom: 1rem;
    }

    .input {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 1rem;
      border-radius: 10px;
      background: ${props => props.theme.backgroundSecond};
      border: solid 2px ${props => props.theme.gray_easy};
      color: ${props => props.theme.gray_easy};

      input {
        width: 100%;
        font-size: 1rem;
        color: ${props => props.theme.gray};
        background: none;
        outline: none;
        border: none;

        ::placeholder {
          color: ${props => props.theme.gray_easy};
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
    color: ${props => props.theme.gray};

    a {
      color: ${props => props.theme.firstColor};
      border-bottom: 1px solid ${props => props.theme.firstColor};

      &:hover {
        color: ${props => props.theme.hover};
        border-bottom: 1px solid ${props => props.theme.hover};
      }
    }
  }
`

export const BlogItem = styled.div`
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
      color: ${props => props.theme.white};
    }
  }

  .description {
    max-width: 30rem;

    p {
      margin: 1.5rem 0;
      color: ${props => props.theme.gray_easy};

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
        color: ${props => props.theme.text};
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
  }
`


export const Banner = styled.div`
  position: relative;
  margin-bottom: 6rem;

  .bannerUrl {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: 0 30%;
    border-bottom: 1px solid ${props => props.theme.border};

    @media (min-width: 768px) {
      height: 27rem;
    }

    @media (min-width: 994px) {
      height: 28rem;
    }
  }

  .bannerContainer {
    @media (min-width: 1300px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .bannerContent {
    position: relative;
    bottom: 5rem;
    z-index: 2;
    margin-bottom: 2rem;

    @media (min-width: 994px) {
      bottom: 7.5rem;
      margin-bottom: 3rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      padding-left: 3rem;
    }

    @media (min-width: 994px) {
      padding-left: 7rem;
    }

    @media (min-width: 1500px) {
      padding-left: 15%;
    }

    h1 {
      color: ${props => props.theme.text};
      font-weight: 800;
      font-size: 2rem;

      @media (min-width: 768px) {
        font-size: 2.7rem;
      }
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;

      @media (min-width: 768px) {
        font-size: 1.3rem;
      }

      font-weight: 600;
      color: ${props => props.theme.firstColor};
    }

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 10px;
      padding: 1rem;
      background: ${props => props.theme.backgroundAlt};
      border: 1px solid ${props => props.theme.borderSecond};
      mix-blend-mode: multiply;

      @media (min-width: 768px) {
        width: 13rem;
        height: 13rem;
      }

      @media (min-width: 994px) {
        width: 16rem;
        height: 16rem;
      }
    }
  }

  .link {
    position: relative;
    bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (min-width: 468px) {
      flex-direction: row;
      align-items: end;
      justify-content: center;
    }

    @media (min-width: 768px) {
      margin-bottom: 1rem;
    }

    @media (min-width: 1300px) {
      bottom: 8.8rem;
      right: 3%;
    }

    @media (min-width: 2000px) {
      right: 14%;
    }
  }
`
