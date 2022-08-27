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
import RandomCardPage from "./pages/RandomCardPage/RandomCardPage";
// Store
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deck/:deckID" element={<DeckPage />} />
        <Route
          path="/deck/:deckID/element/:elementID"
          element={<ElementPage />}
        />
        <Route path="/deck/:deckID/learn" element={<LearnPage />} />
        <Route path="/decks/random" element={<RandomCardPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
