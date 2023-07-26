import { Logo } from "../UI";
import List from "../List/List";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <Logo />
      <List />
    </nav>
  );
}

export default Nav;
