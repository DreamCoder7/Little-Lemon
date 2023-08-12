import { Logo } from "../UI";
import List from "../List/List";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <Logo />
      <List flex="row" color="var(--color--gray-800)" />
    </nav>
  );
}

export default Nav;
