import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    dispatch(createAnecdote(event.target.newAnecdote.value));
    dispatch(setNotification(["New anecdote added successfully", 3]));

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
