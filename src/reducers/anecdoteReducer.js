import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";

import anecdoteService from "../services/anecdoteService";

const initializeNotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch(appendAnecdote(newAnecdote));
  };
};

const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.voteAnecdote(anecdote);
    dispatch(voteFor(newAnecdote["id"]));
  };
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
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
      return _.orderBy(action.payload, "votes", "desc");
    },
  },
});

export const { voteFor, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export { initializeNotes, createAnecdote, voteAnecdote };

export default anecdoteSlice.reducer;
