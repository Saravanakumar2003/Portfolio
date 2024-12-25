import styled from 'styled-components';

export const GiscusContainer = styled.div`
  margin-bottom: 20px;
  width: 50%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
`;

export const TextContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textPrimary};
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin: 5px;
  background-color: ${({ theme }) => theme.backgroundSecond};
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.firstColor};
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InfoItem = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.textPrimary};
  decoration: underline;
`;

export const TOCContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.backgroundSecond};
  border: 2px solid ${({ theme }) => theme.firstColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TOCList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TOCItem = styled.li<{ level: number }>`
  margin-left: ${({ level }) => (level - 1) * 20}px;
  margin-bottom: 5px;
  a {
    color: ${({ theme }) => theme.firstColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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

  h1 {
    color: ${({ theme }) => theme.textPrimary};
    margin-top: 2rem;
    text-align: center;
    justify-content: center;
    font-size: 2rem;
  }

  h2 {
    color: ${({ theme }) => theme.firstColor};
    margin-top: 2rem;
    margin-bottom: 1rem;
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
      border: 1px solid ${({ theme }) => theme.textPrimary};
      padding: 0.5rem;
      text-align: left;
    }

    th {
      background: ${({ theme }) => theme.backgroundSecond};
    }
  }
`;