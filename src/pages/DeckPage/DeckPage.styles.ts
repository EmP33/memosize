import styled from "styled-components";

export const Container = styled.main`
  width: 80%;
  background: var(--color-white);
  min-height: 50%;
  border-radius: 10px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding: 1rem;

  @media only screen and (max-width: 1400px) {
    width: 90%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    border-radius: 0;
  }

  & > .actions {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > button {
      width: 20vw;
      padding: 1rem;
      font-size: 1.2rem;
      border: none;
      outline: none;
      background-color: var(--color-secondary-dark);
      color: var(--color-white);
      border-radius: 5px;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        width: 35vw;
      }

      &[data-type="back"] {
        background-color: var(--color-primary-dark);
      }

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  & > .elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin-top: 3rem;

    @media only screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;
