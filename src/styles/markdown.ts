import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const MarkdownContainer = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  h1{
    color: ${({ theme }) => theme.textPrimary};
    margin-top: 2rem;
    text-align: center;
    justify-content: center;
    font-size: 2rem
  } 

  h2{
    color: ${({ theme }) => theme.firstColor};
    margin-top: 2rem;
    margin-bottom: 1rem
  }
  h3, h4, h5, h6 {
    color: ${({ theme }) => theme.secondColor};
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  a {
    color: ${({ theme }) => theme.secondColor};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.firstColor};
    padding-left: 1rem;
    color: ${({ theme }) => theme.gray};
    margin-bottom: 1rem;
  }

  code {
    background: ${({ theme }) => theme.backgroundSecond};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  pre {
    background: ${({ theme }) => theme.backgroundSecond};
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;

    th, td {
      border: 1px solid ${({ theme }) => theme.borderColor};
      padding: 0.5rem;
      text-align: left;
    }

    th {
      background: ${({ theme }) => theme.backgroundSecond};
    }
  }
`;