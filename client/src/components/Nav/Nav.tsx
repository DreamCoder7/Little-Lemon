import { useState } from "react";

import { Logo, Toggle, Overlay } from "../UI";
import List from "./List/List";
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
      <List isNavOpen={isNavOpen} clicked={toggleNavHandler} />
      <Overlay show={isNavOpen} clicked={toggleNavHandler} />
    </nav>
  );
}

export default Nav;
