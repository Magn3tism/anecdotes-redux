import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import anecdoteService from "../services/anecdoteService";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    dispatch(createAnecdote(event.target.newAnecdote.value));
    anecdoteService.createNew(event.target.newAnecdote.value);

    event.target.newAnecdote.value = "";
  };

  return (
    <>
      <h2>Create New</h2>

      <form onSubmit={addAnecdote}>
        <div>
          <input name="newAnecdote" />
        </div>
        <button>Create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
