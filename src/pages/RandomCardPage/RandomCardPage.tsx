import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Types
import { deckType, deckElementType } from "../../data.types";
// Store
import { useAppSelector } from "../../hooks/reduxHooks";
import { RandomButton } from "../HomePage/HomePage.styles";
// Styles
import { Wrapper, Wrapper404, Card } from "./RandomCardPage.styles";
// Icons
import { GiReturnArrow } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const RandomCardPage = () => {
  const navigate = useNavigate();
  const [rotateStatus, setRotateStatus] = useState(false);
  const [element, setElement] = useState<deckElementType | null>(null);
  const decks = useAppSelector((state) => state.decks);

  const randomizeElement = () => {
    setElement(
      decks.map((deck: deckType) => deck.elements).flat()[
        Math.floor(
          Math.random() *
            decks.map((deck: deckType) => deck.elements).flat().length -
            1
        )
      ]
    );
  };

  useEffect(() => {
    randomizeElement();
  }, []);

  const rotateCardHandler = () => {
    setRotateStatus((prev) => !prev);
  };

  if (!decks.length) {
    return (
      <Wrapper404>
        <h1>404 error</h1>
        <p>
          <Link to="/">Wróć do strony głównej</Link>
        </p>
      </Wrapper404>
    );
  }
  return (
    <Wrapper>
      <div className="actions">
        <RandomButton onClick={randomizeElement}>
          <GiPerspectiveDiceSixFacesRandom />
        </RandomButton>
        <RandomButton onClick={() => navigate("/")}>
          <GiReturnArrow />
        </RandomButton>
      </div>

      {!element ? (
        ""
      ) : (
        <Card elActive={rotateStatus} onClick={rotateCardHandler}>
          <div className="front">
            <h3>{element.front}</h3>
          </div>
          <div className="back">
            <h3 dangerouslySetInnerHTML={{ __html: element.back }}></h3>
          </div>
        </Card>
      )}
    </Wrapper>
  );
};

export default RandomCardPage;
