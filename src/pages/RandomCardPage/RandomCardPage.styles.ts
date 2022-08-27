import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const Wrapper404 = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: var(--color-secondary);
  align-content: center;

  & > h1 {
    margin: 0;
  }
  & a {
    color: #fff;
  }
`;

export const Card = styled.div<{ elActive: boolean }>`
  width: 50%;
  height: 65vh;
  text-align: center;
  cursor: pointer;
  position: realtive;
  transition: 0.5s ease-in-out;
  transform-style: preserve-3d;
  background: linear-gradient(45deg, #22222f, #232331);
  transform: ${(props) => (props.elActive ? "rotateY(0.5turn)" : "")};
  filter: blur(200%);
  border-radius: 30px;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    min-height: 100vh;
    border-radius: 0;
  }

  ul {
    text-align: left;
  }

  h3 {
    font-size: 1.4rem;
    @media only screen and (max-width: 1200px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
  .front {
    border-radius: 30px;
    background-color: var(--color-secondary);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    padding: 8px;
    transition: 1s ease-in-out;
    -webkit-box-reflect: below 0
      linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
  }
  .back {
    border-radius: 30px;
    background-color: var(--color-secondary);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transition: 1s ease-in-out;
    -webkit-box-reflect: below 0
      linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
    transform: rotateY(0.5turn);
  }
`;
