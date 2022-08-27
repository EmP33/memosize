import { deckType } from "../data.types";
import { reducer, deckActions } from "./index";

export const exampleDecks: deckType[] = [
  {
    id: 0,
    title: "Javascript",
    elements: [
      { back: "Example back", front: "Example front", id: 0, status: 0 },
      { back: "Example back 2", front: "Example front 2", id: 1, status: 0 },
    ],
  },
  {
    id: 1,
    title: "CSS",
    elements: [
      { back: "Example back", front: "Example front", id: 0, status: 0 },
      { back: "Example back 2", front: "Example front 2", id: 1, status: 0 },
    ],
  },
];

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ decks: [] });
});

test("should handle fetching decks", () => {
  const previousState: { decks: deckType[] } = { decks: [] };
  expect(reducer(previousState, deckActions.fetch(exampleDecks))).toEqual({
    decks: exampleDecks,
  });
});
