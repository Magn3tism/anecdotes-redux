import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { initializeNotes } from "./reducers/anecdoteReducer";

import AnecdoteForm from "./components/AnecdotesForm";
import AnecdotesList from "./components/AnecdotesList";
import Filter from "./components/Filter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
