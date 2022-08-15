import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-secondary);
  padding: 12px 12px 24px 12px;
  min-width: 300px;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  & div {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;

    & h2 {
      font-size: 32px;
      margin: 0;
      margin-right: 28px;
    }

    & svg {
      font-size: 64px;
      color: var(--color-primary-light);
    }
  }

  & > a {
    display: block;
    text-align: center;
    text-decoration: none;
    width: 100%;
    font-size: 20px;
    background-color: var(--color-primary-dark);
    color: #fff;
    border: none;
    outline: none;
    padding: 8px 0 8px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover,
    &:active {
      filter: brightness(60%);
    }
  }
`;
