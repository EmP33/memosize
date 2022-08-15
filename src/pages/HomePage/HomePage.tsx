import React from "react";
//Styles
import { Container } from "./HomePage.styles";
// Components
import RepetitionBlock from "../../components/RepetitionBlock/RepetitionBlock";

const HomePage = () => {
  return (
    <Container>
      <h1>Memosize</h1>
      <div>
        <h1>Memosize</h1>
        <RepetitionBlock />
        <RepetitionBlock />
        <RepetitionBlock />
        <RepetitionBlock />
        <RepetitionBlock />
        <RepetitionBlock />
      </div>
    </Container>
  );
};

export default HomePage;
