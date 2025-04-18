import styled from 'styled-components';

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.border};

  .input-group {
    position: relative;
    width: 100%;
    max-width: 1200px;

    .input {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid ${props => props.theme.border};
      border-radius: 5px;
      background: ${props => props.theme.backgroundSecond};
      color: ${props => props.theme.firstColor};
      font-size: 1rem;
      outline: none;
      transition: border-color 0.3s;

      &:focus {
        border-color: ${props => props.theme.firstColor};
      }
    }

    .user-label {
      left: 1rem;
      font-size: 0.875rem;
      transition: color 0.3s;
    }
  }

  .input-group input[type="checkbox"] {
    width: auto;
    margin-right: 1rem;
  }

  .input-group label[for="consent"] {
  }
`;

export const ButtonSecondary = styled.button`
  background-color: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.hoverSecond};
  }
`;