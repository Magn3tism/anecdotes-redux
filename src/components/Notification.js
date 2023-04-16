import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);

  const style = {
    border: "3px solid green",
    padding: 10,
    margin: 10,
    color: "green",
    fontSize: "20px",
  };

  if (notification) return <div style={style}>{notification}</div>;
  return null;
};

export default Notification;
