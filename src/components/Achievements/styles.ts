// Import necessary dependencies
import styled, { keyframes } from 'styled-components';

// Styled components for Blog component
export const AchievementsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 0 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 280px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 468px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 994px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  `;


export const AchievementsContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  background-color: ${props => props.theme.background};
  border: 3px solid ${props => props.theme.border};

  &:hover {
    transform: scale(1.02);
  }

  .title {
    padding: 20px;
    color: ${props => props.theme.firstColor};

    h1 {
      font-size: 1rem;
      margin-bottom: 10px;
      
      color: ${props => props.theme.textSecondary};
    }

    h3 {
      font-size: 1rem;
      margin-top: 10px;
      color: ${props => props.theme.textSecondary};
    }

    span {
      font-size: 0.8rem;
      color: ${props => props.theme.gray_easy};
    }
  }

  .img {
    overflow: hidden;
    height: 200px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    padding: 20px;
    color: ${props => props.theme.text};

    span {
      font-size: 0.9rem;
      color: ${props => props.theme.gray_easy};
    }
  }
`;

export const Container = styled.div`
  /* Add any global styles for the Container component here */
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  span {
    display: inline-flex;
    align-items: center;
    margin-left: 10px;
    font-size: 1.2rem;

    svg {
      margin-right: 5px;
    }
  }
`;
