import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-secondary);
  padding: 0.75rem;
  border-radius: 10px;
  display: grid;
  grid-template-rows: minmax(max-content, 150px) 1fr max-content;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  & h2 {
    font-size: 1.5rem;
  }
  & span {
    display: block;
    width: 100%;
    height: 0.75rem;
    border-radius: 5px;
    background-color: var(--color-primary-dark);
  }
`;
