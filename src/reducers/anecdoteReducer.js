import uniqid from "uniqid";
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: uniqid(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
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
  },
});

export const { createAnecdote, voteFor } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

// export const createAnecdote = (content) => {
//   return { type: "ADD", payload: asObject(content) };
// };

// const anecdoteReducer = (state = initialState, action) => {
//   console.log("----------Anecdote----------");
//   console.log("State now: ", state);
//   console.log("Action", action);

//   switch (action.type) {
//     case "VOTE":
//       const newState = state.map((anecdote) => {
//         if (anecdote.id === action.payload)
//           return { ...anecdote, votes: ++anecdote.votes };
//         return anecdote;
//       });

//       return _.orderBy(newState, "votes", "desc");

//     case "ADD":
//       return state.concat(action.payload);

//     default:
//       return state;
//   }
// };

// export default anecdoteReducer;
