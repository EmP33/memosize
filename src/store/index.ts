import { deckType } from "./../data.types";

import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "deck",
  initialState: {
    decks: [] as deckType[],
  },
  reducers: {
    fetch(state, action: PayloadAction<any[]>) {
      state.decks = action.payload;
    },
  },
});

const store = configureStore({ reducer: deckSlice.reducer });
export const deckActions = deckSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const reducer = deckSlice.reducer;

export default store;
