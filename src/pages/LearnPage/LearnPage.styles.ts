import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    position: absolute;
    left: 50%;
    top: 2%;
    width: 250px;
    height: 50px;
    transform: translateX(-50%);
    border: 2px solid var(--color-secondary);
    outline: none;
    background: var(--color-primary-dark);
    color: var(--color-white);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      filter: brightness(115%);
    }
  }
`;

export const Card = styled.div<{ elActive: boolean }>`
  width: 95%;
  height: 60vh;
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

  ul {
    text-align: left;
  }

  h3 {
    font-size: 1.7rem;
    @media only screen and (max-width: 1200px) {
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  .front {
    border-radius: 30px;
    background-color: var(--color-secondary);
    width: 100%;
    min-height: 100%;
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
