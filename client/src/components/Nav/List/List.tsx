import { useContext } from "react";

import { ListItem } from "./ListItem/ListItem";
import classes from "./List.module.css";
import { ListProps } from "../../../types/index";
import { GrFormClose } from "../../../constants/index";
import { Authcontext } from "../../context/auth.context";

function List(props: ListProps) {
  const { isNavOpen, clicked } = props;
  const { modalHandler } = useContext(Authcontext);

  const listClasses = isNavOpen
    ? [classes.List, classes.MobileNavOpen].join(" ")
    : classes.List;

  return (
    <ul className={listClasses}>
      <div role="button" className={classes.MNavClose} onClick={clicked}>
        <GrFormClose className={classes.IconClose} />
      </div>
      <ListItem link="/">Home</ListItem>
      <ListItem link="/about">About</ListItem>
      <ListItem link="/menu">Menu</ListItem>
      <ListItem link="/reservation">Reservations</ListItem>
      <ListItem link="/order">order online</ListItem>
      <button className={classes.Login} onClick={modalHandler}>
        Login
      </button>
    </ul>
  );
}

export default List;
