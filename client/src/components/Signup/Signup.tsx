import { useContext } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import classes from "./Signup.module.css";
import { GrFormClose } from "../../constants/index";
import { motion } from "framer-motion";
import { ModalContext } from "../../context/modal.context";
import { SignupProps, FormData } from "../../types";
import { NotificationContext } from "../../context/notification.context";
import { Notification } from "../UI/index";
import { useAuth } from "../../hooks/index";

const schema = object({
  name: string().required("Required"),
  email: string().required("Required"),
  password: string().min(6, "provide min 6 character!").required("Required"),
});

function Signup(props: SignupProps) {
  const { setLoginMode } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { modalHandler } = useContext(ModalContext);
  const { showNotification, notification } = useContext(NotificationContext);
  const { signup } = useAuth();

  const onSubmit = handleSubmit(async (formData) => {
    showNotification({
      title: "Signing up...",
      message: "Please wait while we are creating your account!",
      status: "pending",
    });

    try {
      const res = await axios.post(
        "https://little-lemon-main.onrender.com/signup",
        formData
      );
      showNotification({
        title: "Success!",
        message: "Your account has been created!",
        status: "success",
      });
      const { name, email } = res.data.user;
      signup({ name, email });
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
      className={classes.Signup}
      initial={{
        opacity: 0,
        transform: "translateY(-100vh)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0)",
      }}
      transition={{ bounce: 0.25, damping: 300 }}
      onSubmit={onSubmit}
    >
      {notification?.status === "pending" && <Notification {...notification} />}
      {notification?.status === "success" && <Notification {...notification} />}
      {notification?.status === "error" && <Notification {...notification} />}
      <div className={classes.ModalClose} role="button" onClick={modalHandler}>
        <GrFormClose className={classes.IconClose} />
      </div>
      <div className={classes.Heading}>
        <h4 className={classes.Title}>Let's Get started!</h4>
        <p className={classes.Text}>
          Create an account to get all the feature LittleLemon offer.
        </p>
      </div>

      <div className={classes.InputCon}>
        <div>
          <p className={classes.ErrorMessage}>
            {errors && errors.name?.message}
          </p>
          <input
            type="text"
            placeholder="Ab Nigu"
            className={classes.Input}
            {...register("name")}
            disabled={notification?.status === "pending"}
          />
        </div>
        <div>
          <p className={classes.ErrorMessage}>
            {errors && errors.email?.message}
          </p>
          <input
            type="email"
            placeholder="john@gmail.com"
            className={classes.Input}
            {...register("email")}
            disabled={notification?.status === "pending"}
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
            disabled={notification?.status === "pending"}
          />
        </div>
      </div>

      <button
        className={classes.Btn}
        disabled={notification?.status === "pending"}
      >
        create account
      </button>
      <div className={classes.ExistedAcc}>
        <p className={classes.ExistedAccTitle}>Already have an account?</p>
        <button className={classes.LoginBtn} onClick={setLoginMode}>
          Login
        </button>
      </div>
    </motion.form>
  );
}

export default Signup;
