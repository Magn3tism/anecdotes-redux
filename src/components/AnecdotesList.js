import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const AnecdotesList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote));
  };

  return (
    <>
      {
        // eslint-disable-next-line
        anecdotes.map((anecdote) => {
          if (anecdote.content.toUpperCase().includes(filter.toUpperCase()))
            return (
              <div key={anecdote.id}>
                <div>{anecdote.content}</div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote)}>vote</button>
                </div>
              </div>
            );
        })
      }
    </>
  );
};

export default AnecdotesList;
