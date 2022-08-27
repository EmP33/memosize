import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useNavigate } from "react-router-dom";
//Styles
import { Container, RandomButton } from "./HomePage.styles";
// Components
import RepetitionBlock from "../../components/RepetitionBlock/RepetitionBlock";
import LoadingPage from "../LoadingPage/LoadingPage";
// Types
import { deckType } from "../../data.types";
// Icons
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
// Store
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deckActions } from "../../store";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [decks, setDecks] = useState<deckType[]>([]);

  useEffect(() => {
    setLoading(true);
    const deckRef = ref(database, "decks");
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setDecks(data);
      setLoading(false);
      dispatch(deckActions.fetch(data));
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <h1>Memosize</h1>
      <RandomButton onClick={() => navigate("/decks/random")}>
        <GiPerspectiveDiceSixFacesRandom />
      </RandomButton>
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
