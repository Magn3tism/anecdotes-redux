import axios from "axios";
import uniqid from "uniqid";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (anecdote) => {
  const response = await axios.post(baseUrl, {
    content: anecdote,
    id: uniqid(),
    votes: 0,
  });

  return response.data;
};

const voteAnecdote = async (anecdote) => {
  const newAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, newAnecdote);

  return response.data;
};

let noteService = { getAll, createNew, voteAnecdote };

export default noteService;
