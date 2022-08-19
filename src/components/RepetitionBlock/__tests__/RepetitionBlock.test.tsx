import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RepetitionBlock from "../RepetitionBlock";

const dummyElement = {
  back: "Example Back",
  front: "Example Front",
  id: 1,
  active: false,
};

const dummyEmptyDeck = { id: 0, elements: [], title: "Dummy title" };
const dummyDeck1 = {
  id: 0,
  elements: Array(3).fill(dummyElement),
  title: "Dummy title",
};
const dummyDeck2 = {
  id: 0,
  elements: Array(5).fill(dummyElement),
  title: "Dummy title",
};

describe("<RepetitionBlock />", () => {
  it("should render correct data", () => {
    render(
      <Router>
        <RepetitionBlock deck={dummyEmptyDeck} />
      </Router>
    );
    expect(screen.getByText("Dummy title").textContent).toEqual("Dummy title");
    expect(screen.getByTestId("cardtest").textContent).toEqual("0 cards");
  });
  it("should render 0 cards", () => {
    render(
      <Router>
        <RepetitionBlock deck={dummyEmptyDeck} />
      </Router>
    );
    expect(screen.getByTestId("cardtest").textContent).toEqual("0 cards");
  });
  it("should render 3 cards", () => {
    render(
      <Router>
        <RepetitionBlock deck={dummyDeck1} />
      </Router>
    );
    expect(screen.getByTestId("cardtest").textContent).toEqual("3 cards");
  });
  it("should render 5 cards", () => {
    render(
      <Router>
        <RepetitionBlock deck={dummyDeck2} />
      </Router>
    );
    expect(screen.getByTestId("cardtest").textContent).toEqual("5 cards");
  });
});
