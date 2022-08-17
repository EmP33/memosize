import React from "react";
//Styles
import { Container } from "./LoadingPage.styles";
// Icons
import { ThreeBody } from "@uiball/loaders";

const LoadingPage = () => {
  return (
    <Container>
      <h1>Memosize</h1>
      <ThreeBody size={45} speed={1} color="var(--color-primary)" />
    </Container>
  );
};

export default LoadingPage;
