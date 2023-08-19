import { useContext } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from "axios";

import classes from "./Login.module.css";
import { GrFormClose } from "../../constants/index";
import { ModalContext } from "../../context/modal.context";
import { LoginProps } from "../../types";
import { useAuth } from "../../hooks/index";
import { Notification } from "../UI/index";
import { NotificationContext } from "../../context/notification.context";

const schema = object({
  email: string().required("Required"),
  password: string().required("Required").min(6, "provide min 6 character!"),
});

type FormData = {
  email: string;
  password: string;
};

function Login(props: LoginProps) {
  const { setSignupMode } = props;

  const { modalHandler } = useContext(ModalContext);
  const { login } = useAuth();
  const { notification, showNotification } = useContext(NotificationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onsubmit = handleSubmit(async (formData) => {
    showNotification({
      title: "Logging in...",
      message: "Please wait while we are logging you in!",
      status: "pending",
    });

    try {
      const data = await axios.post(
        "https://little-lemon-main.onrender.com/login",
        formData
      );
      console.log(data);
      showNotification({
        title: "Success!",
        message: "You have been logged in!",
        status: "success",
      });
      const { name, email } = data.data.user;
      login({ name, email });
      modalHandler();
    } catch (err) {
      console.log(err);
      showNotification({
        title: "Error!",
        message: "Something went wrong!",
        status: "error",
      });
    }
  });

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
      onSubmit={onsubmit}
    >
      {notification?.status === "pending" && <Notification {...notification} />}
      {notification?.status === "success" && <Notification {...notification} />}
      {notification?.status === "error" && <Notification {...notification} />}

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
        <div>
          <p className={classes.ErrorMessage}>
            {errors && errors.email?.message}
          </p>
          <input
            type="email"
            placeholder="john@gmail.com"
            className={classes.Input}
            {...register("email")}
          />
        </div>
        <div>
          <p className={classes.ErrorMessage}>
            {errors && errors.password?.message}
          </p>
          <input
            type="password"
            placeholder="password"
            className={classes.Input}
            {...register("password")}
          />
        </div>

        <button className={classes.ForgotPass} aria-label="On Click">
          Forgot Password?
        </button>
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
