import React from "react";
// Routes
import { Routes, Route } from "react-router-dom";
// Styles
import GlobalStyle from "./App.styles";
// Pages
import DeckPage from "./pages/DeckPage/DeckPage";
import ElementPage from "./pages/ElementPage/ElementPage";
import HomePage from "./pages/HomePage/HomePage";
import LearnPage from "./pages/LearnPage/LearnPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deck/:deckID" element={<DeckPage />} />
        <Route
          path="/deck/:deckID/element/:elementID"
          element={<ElementPage />}
        />
        <Route path="/deck/:deckID/learn" element={<LearnPage />} />
      </Routes>
    </>
  );
}

export default App;
