export const filterChange = (text) => {
  return {
    type: "SET_FILTER",
    payload: text,
  };
};

const filterReducer = (state = "", action) => {
  console.log("----------Filter----------");
  console.log("State now: ", state);
  console.log("Action", action);

  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
