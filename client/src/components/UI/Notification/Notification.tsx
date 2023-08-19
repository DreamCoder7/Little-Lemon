import classes from "./Notification.module.css";
import { NotificationProps } from "../../../types";
import Loading from "../Loading/Loading";

function Notification(props: NotificationProps) {
  const { message, title, status } = props;

  const ntxStyles = {
    backgroundColor: `${status === "success" ? "#16a34a" : "#ef4444"}`,
  };

  return status === "pending" ? (
    <Loading />
  ) : (
    <div className={classes.Notification} style={ntxStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
