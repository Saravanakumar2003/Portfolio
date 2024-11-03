import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;


  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  align-items: center;
  transition: transform 0.3s;
  overflow: hidden;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  border: 2px solid ${props => props.theme.border};

  &:hover{
    border-color: ${props => props.theme.firstColor};
    border-radius: 11px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 1;
    object-fit: cover;

    &:hover {
      opacity: 0.5;
    }
  }

  .title {
    position: absolute;
    padding: 0 1rem 2.2rem 1rem;

    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: linear-gradient(rgb(0, 0, 0, 0) -60%, rgb(8, 2, 5, 15));

    opacity: 0;
    transition: 0.4s ease-in-out;

    &:hover {
      opacity: 1;
      height: 100%;
    }

    h2 {
      font-weight: 900;
      font-size: 1.9rem;
      text-align: center;
      color: ${props => props.theme.firstColor};
    }

    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: white;
      margin-bottom: .8rem;
      font-align: center;
    }

    .tags {
      display: flex;
      flex-direction: row;

      img {
        width: 2rem;
        height: 2rem;
        margin-right: .5rem;
      }
    }
  }

  @media(min-width: 1300px) {
    max-width: 25rem;
  }

  max-width: 24rem;
`
export const TagButton = styled.button<{ selected: boolean }>`
  background: ${props => props.theme.secondColor};
  color: ${props => props.theme.text};
  padding: .5rem 1rem;
  border-radius: 5px;
  margin-right: .5rem;
  margin-bottom: .5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  transform: ${props => props.selected ? 'scale(1.1)' : 'none'}; // scale up when selected
  box-shadow: ${props => props.selected ? '0 0 10px rgba(0,0,0,0.5)' : 'none'}; // add shadow when selected

  &:hover {
    background: ${props => props.theme.secondColor};
  }

  ${props => props.selected && `
    background: ${props.theme.firstColor};
    color: black; 
  `}

  @media(min-width: 768px) {
    margin-right: 1rem;
  }

  @media(min-width: 1200px) {
    margin-right: 1.5rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;