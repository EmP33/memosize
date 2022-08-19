import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Container } from "./RepetitionBlock.styles";
// Components
import RepetitionStatus from "../RepetitionStatus/RepetitionStatus";
// Icons
import { GiGraduateCap } from "react-icons/gi";
//Types
import { deckType } from "../../data.types";

interface Props {
  deck: deckType;
}

const RepetitionBlock: React.FC<Props> = ({ deck }) => {
  return (
    <Container>
      <div>
        <h2>{deck.title}</h2>
        <GiGraduateCap />
      </div>
      <RepetitionStatus />
      <p data-testid="cardtest">
        {deck.elements ? deck.elements.length : 0} cards
      </p>
      <Link to={`/deck/${deck.id}`}>VIEW</Link>
    </Container>
  );
};

export default RepetitionBlock;
