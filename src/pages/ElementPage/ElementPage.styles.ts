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
  align-content: flex-start;

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }

  & > .actions {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > button {
      width: 20rem;
      padding: 1rem;
      font-size: 1.2rem;
      border: none;
      outline: none;
      background-color: var(--color-secondary-dark);
      color: var(--color-white);
      border-radius: 5px;
      cursor: pointer;

      @media only screen and (max-width: 600px) {
        width: 50vw;
      }

      &[data-type="back"] {
        background-color: var(--color-primary-dark);
      }

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  & > .element {
    background-color: var(--color-secondary-dark);
    padding: 1rem;
    border-radius: 10px;
    margin: 2rem;
    width: 50%;
    text-align: center;

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    & > h2 {
      font-size: 2rem;
    }
    & > p {
      font-size: 1.2rem;

      & > ul,
      ol {
        text-align: left;
      }
    }

    & span {
      display: block;
      width: 100%;
      height: 0.75rem;
      border-radius: 5px;
      background-color: var(--color-primary-dark);
    }
  }
`;
