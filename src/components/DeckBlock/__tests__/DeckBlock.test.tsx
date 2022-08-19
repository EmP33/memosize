import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import DeckBlock from "../DeckBlock";

const dummyElement = {
  back: "Example Back",
  front: "Example Front",
  id: 1,
  active: false,
};

describe("<DeckBlock />", () => {
  it("should display correct data", () => {
    render(
      <Router>
        <DeckBlock element={dummyElement} />
      </Router>
    );
    expect(screen.getByText("Example Front").textContent).toContain(
      "Example Front"
    );
    expect(screen.getByText("Example Back").textContent).toContain(
      "Example Back"
    );
  });
});
