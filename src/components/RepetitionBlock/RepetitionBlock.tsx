import React from "react";
// Styles
import { Container } from "./RepetitionBlock.styles";
// Components
import RepetitionStatus from "../RepetitionStatus/RepetitionStatus";
// Icons
import { GiGraduateCap } from "react-icons/gi";

const RepetitionBlock = () => {
  return (
    <Container>
      <div>
        <h2>Javascript</h2>
        <GiGraduateCap />
      </div>
      <RepetitionStatus />
      <p>1 of 2 cards</p>
      <button>VIEW</button>
    </Container>
  );
};

export default RepetitionBlock;
