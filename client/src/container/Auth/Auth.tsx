import { useState, useContext } from "react";

import { Signup, Login } from "../../components/index";
import { Overlay } from "../../components/UI/index";
import classes from "./Auth.module.css";
import { Authcontext } from "../../components/context/auth.context";

function Auth() {
  const [mode, setMode] = useState<string>("login");

  const { modalHandler, modalOpen } = useContext(Authcontext);

  const signupModeHandler = () => {
    setMode("signup");
  };

  const loginModeHandler = () => {
    setMode("login");
  };

  return modalOpen ? (
    <div className={classes.Auth}>
      <Overlay show={modalOpen} clicked={modalHandler} />
      {mode === "login" ? (
        <Login setSignupMode={signupModeHandler} />
      ) : (
        <Signup setLoginMode={loginModeHandler} />
      )}
    </div>
  ) : null;
}

export default Auth;
