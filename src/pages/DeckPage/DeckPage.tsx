import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Router
import { useParams } from "react-router-dom";
// Types
import { deckType } from "../../data.types";
//Styles
import { Container } from "./DeckPage.styles";
//Components
import DeckBlock from "../../components/DeckBlock/DeckBlock";

const DeckPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [deck, setDeck] = useState<deckType | null>(null);
  useEffect(() => {
    const deckRef = ref(database, `decks/${params.deckID}`);
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setDeck(data);
    });
  }, []);

  console.log(deck);

  return (
    <Container>
      <div className="actions">
        <button data-type="back" onClick={() => navigate("/")}>
          COFNIJ
        </button>
        <button data-type="learn">UCZ SIĘ</button>
      </div>
      <div className="elements">
        {deck?.elements
          ? deck?.elements.map((el) => <DeckBlock key={el.id} element={el} />)
          : ""}
      </div>
    </Container>
  );
};

export default DeckPage;
