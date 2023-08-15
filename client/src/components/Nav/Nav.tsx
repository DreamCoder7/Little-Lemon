import { useState } from "react";

import { Logo, Toggle } from "../UI";
import List from "../List/List";
import classes from "./Nav.module.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNavHandler = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <nav className={classes.Nav}>
      <Toggle clicked={toggleNavHandler} isOpen={isNavOpen} />

      <Logo />
      <List flex="row" color="var(--color--gray-800)" isNavOpen={isNavOpen} />
    </nav>
  );
}

export default Nav;
