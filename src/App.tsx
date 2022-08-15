import React from "react";
// Routes
import { Routes, Route } from "react-router-dom";
// Styles
import GlobalStyle from "./App.styles";
// Pages
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
