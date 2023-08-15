import { ListItem } from "./ListItem/ListItem";
import classes from "./List.module.css";
import { ListProps } from "../../types";

function List(props: ListProps) {
  const { flex, color, isNavOpen } = props;
  const listClass =
    flex === "row"
      ? classes.List
      : [classes.List, classes.FlexColumn].join(" ");

  console.log(isNavOpen);

  return (
    <ul className={listClass}>
      <ListItem color={color} link="/">
        Home
      </ListItem>
      <ListItem color={color} link="/about">
        About
      </ListItem>
      <ListItem color={color} link="/menu">
        Menu
      </ListItem>
      <ListItem color={color} link="/reservation">
        Reservations
      </ListItem>
      <ListItem color={color} link="/order">
        order online
      </ListItem>
      <ListItem color={color} link="/login">
        Login
      </ListItem>
    </ul>
  );
}

export default List;
