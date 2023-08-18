import { useContext } from "react";
import { motion } from "framer-motion";

import classes from "./Login.module.css";
import { GrFormClose } from "../../constants/index";
import { Authcontext } from "../context/auth.context";
import { LoginProps } from "../../types";

function Login(props: LoginProps) {
  const { setSignupMode } = props;

  const { modalHandler } = useContext(Authcontext);

  return (
    <motion.form
      className={classes.Login}
      initial={{
        opacity: 0,
        transform: "translateY(-100vh)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      transition={{ bounce: 0.25, damping: 300 }}
    >
      <div className={classes.ModalClose} role="button" onClick={modalHandler}>
        <GrFormClose className={classes.IconClose} />
      </div>
      <div className={classes.Heading}>
        <h4 className={classes.Title}>Welcome back!</h4>
        <p className={classes.Text}>
          Login in to an existant account of LittleLemon.
        </p>
      </div>

      <div className={classes.InputCon}>
        <input
          type="email"
          placeholder="john@gmail.com"
          className={classes.Input}
        />
        <input
          type="password"
          placeholder="password"
          className={classes.Input}
        />

        <button className={classes.ForgotPass}>Forgot Password?</button>
      </div>

      <button className={classes.Btn}>Login</button>
      <div className={classes.CreateAcc}>
        <p className={classes.CreateAccTitle}>Don't have an account?</p>
        <button className={classes.LoginBtn} onClick={setSignupMode}>
          Singup
        </button>
      </div>
    </motion.form>
  );
}

export default Login;
