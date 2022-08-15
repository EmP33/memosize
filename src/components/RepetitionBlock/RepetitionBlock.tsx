import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Container } from "./RepetitionBlock.styles";
// Components
import RepetitionStatus from "../RepetitionStatus/RepetitionStatus";
// Icons
import { GiGraduateCap } from "react-icons/gi";

interface Props {
  deck: any;
}

const RepetitionBlock: React.FC<Props> = ({ deck }) => {
  return (
    <Container>
      <div>
        <h2>{deck.title}</h2>
        <GiGraduateCap />
      </div>
      <RepetitionStatus />
      <p>1 of 2 cards</p>
      <Link to={`/deck/${deck.id}`}>VIEW</Link>
    </Container>
  );
};

export default RepetitionBlock;
