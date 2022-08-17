import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--color-primary);
    margin: 0 0 1rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
