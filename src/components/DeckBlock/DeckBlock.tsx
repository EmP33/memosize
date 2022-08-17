import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// Types
import { deckElementType } from "../../data.types";
// Styles
import { Container } from "./DeckBlock.styles";

interface Props {
  element: deckElementType;
}

const DeckBlock: React.FC<Props> = ({ element }) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/deck/${params.deckID}/element/${element.id}`)}
    >
      <h2>{element.front}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html:
            element.back.length > 100
              ? element.back.slice(0, 100) + "..."
              : element.back,
        }}
      ></p>

      <span></span>
    </Container>
  );
};

export default DeckBlock;
