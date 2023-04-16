import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { initializeNotes } from "./reducers/anecdoteReducer";

import AnecdoteForm from "./components/AnecdotesForm";
import AnecdotesList from "./components/AnecdotesList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
