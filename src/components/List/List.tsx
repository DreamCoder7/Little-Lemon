import { ListItem } from "./ListItem/ListItem";
import classes from "./List.module.css";

function List() {
  return (
    <ul className={classes.List}>
      <ListItem link="/">Home</ListItem>
      <ListItem link="/about">About</ListItem>
      <ListItem link="/menu">Menu</ListItem>
      <ListItem link="/reservation">Reservations</ListItem>
      <ListItem link="/order">order online</ListItem>
      <ListItem link="/login">Login</ListItem>
    </ul>
  );
}

export default List;
