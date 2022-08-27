import { render, screen } from "@testing-library/react";

import store from "../../../store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import RandomCardPage from "../RandomCardPage";

test("should render 404 page when decks element is empty", () => {
  render(
    <Router>
      <Provider store={store}>
        <RandomCardPage />
      </Provider>
    </Router>
  );

  const card = screen.getByText(/404 error/i);

  expect(card.textContent).toEqual("404 error");
});
