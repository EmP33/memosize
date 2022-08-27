import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  & > h1 {
    margin: 0;
    margin-bottom: 16px;
    display: block;
    color: var(--color-secondary-dark);
    font-size: 104px;
    letter-spacing: 8px;
    cursor: pointer;
    position: relative;

    @media only screen and (max-width: 600px) {
      display: none;
    }

    &::before {
      content: "Memosize";
      position: absolute;
      color: transparent;
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0,
        transparent 2px,
        var(--color-secondary-light) 2px,
        var(--color-secondary-light) 4px
      );
      -webkit-background-clip: text;
      top: 0px;
      left: 0;
      z-index: -1;
      animation: animationBefore 4s linear infinite;
    }

    &::after {
      content: "Memosize";
      position: absolute;
      color: transparent;
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 2px,
        var(--color-secondary-light) 2px,
        var(--color-secondary-light) 4px
      );
      -webkit-background-clip: text;
      top: 0px;
      left: 0px;
      animation: animationAfter 4s linear infinite;
    }

    @keyframes animationBefore {
      0% {
        top: 0px;
        left: 0px;
      }
      50% {
        top: 10px;
        left: 10px;
      }
      100% {
        top: 0px;
        left: 0px;
      }
    }
    @keyframes animationAfter {
      0% {
        top: 0px;
        left: 0px;
      }
      50% {
        top: -10px;
        left: -10px;
      }
      100% {
        top: 0px;
        left: 0px;
      }
    }

    &:hover:before {
      top: 10px;
      left: 10px;
    }

    &:hover:after {
      top: -10px;
      left: -10px;
    }
  }

  & > div {
    width: 60%;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 1rem;
    background: var(--color-white);
    border-radius: 50px;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
      padding: 4px;
    }

    & > h1 {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 48px;
      font-family: var(--font-text);
      color: var(--color-secondary);
      margin: 0;
      @media only screen and (min-width: 600px) {
        display: none;
      }
    }
  }
`;

export const RandomButton = styled.button`
  z-index: 5;
  width: 4rem;
  height: 4rem;
  font-size: 3rem;
  display: grid;
  place-items: center;
  border: none;
  background: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  right: 3%;
  top: 3%;

  @media only screen and (max-width: 600px) {
    right: 1%;
    top: 0.5%;
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2.5rem;
  }

  &:hover {
    filter: brightness(110%);
  }
`;
