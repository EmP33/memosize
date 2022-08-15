import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
//Styles
import { Container } from "./HomePage.styles";
// Components
import RepetitionBlock from "../../components/RepetitionBlock/RepetitionBlock";

const HomePage = () => {
  const [decks, setDecks] = useState<any[]>([]);
  useEffect(() => {
    const deckRef = ref(database, "decks");
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setDecks(data);
    });
  }, []);

  return (
    <Container>
      <h1>Memosize</h1>
      <div>
        <h1>Memosize</h1>
        {decks.map((deck) => (
          <RepetitionBlock key={deck.id} deck={deck} />
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
