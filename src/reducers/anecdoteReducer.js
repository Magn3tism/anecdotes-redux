import uniqid from "uniqid";
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: uniqid(),
    votes: 0,
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload;
      return state.concat(asObject(anecdote));
    },

    voteFor(state, action) {
      let newState = JSON.parse(JSON.stringify(state));
      newState = newState.map((anecdote) => {
        if (anecdote.id === action.payload)
          return { ...anecdote, votes: ++anecdote.votes };
        return anecdote;
      });

      return _.orderBy(newState, "votes", "desc");
    },

    appendAnecdote(state, action) {
      return state.concat(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, voteFor, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
