import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logo, Toggle, Overlay } from "../UI";
import List from "./List/List";
import classes from "./Nav.module.css";
import { FaUserCircle } from "../../constants/index";
import { useAuth } from "../../hooks";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const navigate = useNavigate();

  const { email, name, logout } = useAuth();

  const toggleNavHandler = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const showOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className={classes.Nav}>
      <Toggle clicked={toggleNavHandler} isOpen={isNavOpen} />

      <Logo />
      <List isNavOpen={isNavOpen} clicked={toggleNavHandler} />
      <Overlay show={isNavOpen} clicked={toggleNavHandler} />

      {name && email && (
        <div className={classes.User}>
          <div className={classes.Info}>
            <p className={classes.Name}>{name}</p>
            <FaUserCircle
              className={classes.UserIcon}
              onClick={showOptionsHandler}
            />
          </div>
          {showOptions && (
            <ul className={classes.Options}>
              <li className={classes.Items}>Profile</li>
              <li
                className={classes.Items}
                role="button"
                onClick={logoutHandler}
              >
                Logout
              </li>
              <li className={classes.Items}>dashboard</li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
