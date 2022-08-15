import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: var(--color-secondary-lighter);
  height: 7.5px;
  margin: 8px 0 8px 0;
  border-radius: 40px;
  position: relative;

  &::before {
    content: "";
    background-color: var(--color-primary-dark);
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    border-radius: 40px;
  }
`;
