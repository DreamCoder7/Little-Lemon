import { ListItemProps } from "../../../types";
import classes from "./ListItem.module.css";

export const ListItem = (props: ListItemProps) => {
  const { children } = props;

  return <li className={classes.ListItem}>{children}</li>;
};
