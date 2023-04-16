import { createSlice } from "@reduxjs/toolkit";

const setNotification = (notification) => {
  return (dispatch) => {
    dispatch(notificationChange(notification[0]));
    setTimeout(() => {
      dispatch(notificationChange(""));
    }, notification[1] * 1000);
  };
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    notificationChange(state, action) {
      return action.payload;
    },
  },
});

export const { notificationChange } = notificationSlice.actions;
export { setNotification };
export default notificationSlice.reducer;
