import { useContext } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import classes from "./Signup.module.css";
import { GrFormClose } from "../../constants/index";
import { motion } from "framer-motion";
import { Authcontext } from "../context/auth.context";
import { SignupProps, FormData } from "../../types";

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
  console.error(errors);

  const { modalHandler } = useContext(Authcontext);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
        <input
          type="text"
          placeholder="Ab Nigu"
          className={classes.Input}
          {...register("name")}
        />
        <input
          type="email"
          placeholder="john@gmail.com"
          className={classes.Input}
          {...register("email")}
        />
        <input
          type="password"
          placeholder="password"
          className={classes.Input}
          {...register("password")}
        />
      </div>

      <button className={classes.Btn}>create account</button>
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
