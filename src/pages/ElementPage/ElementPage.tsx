import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
// Styles
import { Container } from "./ElementPage.styles";
// Types
import { deckElementType } from "../../data.types";

const ElementPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [element, setElement] = useState<deckElementType | null>(null);
  useEffect(() => {
    const deckRef = ref(
      database,
      `decks/${params.deckID}/elements/${params.elementID}`
    );
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setElement(data);
    });
  }, []);

  console.log(element);
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
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ElementPage;
