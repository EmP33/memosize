import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useParams, useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
//Types
import { deckElementType, deckType } from "../../data.types";
// Components & Pages
import LoadingPage from "../LoadingPage/LoadingPage";
// Styles
import { Container, Card } from "./LearnPage.styles";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Scrollbar } from "swiper";

const LearnPage = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  const params = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState<deckType | null>(null);
  const [deckElements, setDeckElements] = useState<deckElementType[]>([]);

  useEffect(() => {
    const deckRef = ref(database, `decks/${params.deckID}`);
    onValue(deckRef, (snapshot) => {
      const data = snapshot.val();
      setDeck(data);
    });
  }, []);

  const rotateCardHandler = (w: any) => {
    // @ts-ignore
    setDeckElements((prev) => {
      if (prev && deckElements) {
        return prev.map((el: any) => ({
          back: el.back,
          front: el.front,
          id: el.id,
          active:
            el.id === w.id
              ? // @ts-ignore
                deckElements.find((elem) => elem.id === w.id).active
                ? false
                : true // @ts-ignore
              : false,
        }));
      }
    });
  };

  useEffect(() => {
    if (deck) {
      setDeckElements(deck.elements);
    }
  }, [deck]);

  if (!deckElements.length) {
    return <LoadingPage />;
  }
  return (
    <Container>
      <button onClick={() => navigate(`/deck/${params.deckID}`)}>COFNIJ</button>
      {matches ? (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={150}
          centeredSlides={true}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {deckElements.map((el) => (
            <SwiperSlide key={el.id}>
              <Card
                elActive={el.active || false}
                onClick={() => rotateCardHandler(el)}
              >
                <div className="front">
                  <h3>{el.front}</h3>
                </div>
                <div className="back">
                  <h3 dangerouslySetInnerHTML={{ __html: el.back }}></h3>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={150}
          centeredSlides={true}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {deckElements.map((el) => (
            <SwiperSlide key={el.id}>
              <Card
                elActive={el.active || false}
                onClick={() => rotateCardHandler(el)}
              >
                <div className="front">
                  <h3>{el.front}</h3>
                </div>
                <div className="back">
                  <h3 dangerouslySetInnerHTML={{ __html: el.back }}></h3>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default LearnPage;
