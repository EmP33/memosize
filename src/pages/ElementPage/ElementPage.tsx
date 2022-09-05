import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Styles
import { Container } from "./ElementPage.styles";
// Types
import { deckElementType } from "../../data.types";
// Components
import LoadingPage from "../LoadingPage/LoadingPage";

const ElementPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [element, setElement] = useState<deckElementType | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const deckRef = ref(
      database,
      `decks/${params.deckID}/elements/${params.elementID}`
    );
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setElement(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <div className="actions">
        <button
          data-type="back"
          onClick={() => navigate(`/deck/${params.deckID}`)}
        >
          COFNIJ
        </button>
      </div>
      {element ? (
        <div className="element">
          <h2>{element.front}</h2>
          <p dangerouslySetInnerHTML={{ __html: element.back }}></p>

          <span></span>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ElementPage;
