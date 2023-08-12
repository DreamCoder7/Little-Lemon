import { Link } from "react-router-dom";

import { ListItemProps } from "../../../types";
import classes from "./ListItem.module.css";

export const ListItem = (props: ListItemProps) => {
  const { children, link, color } = props;

  return (
    <li className={classes.ListItem}>
      <Link to={link} className={classes.Link} style={{ color: color }}>
        {children}
      </Link>
    </li>
  );
};
