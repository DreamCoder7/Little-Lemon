import LogoImg from "../../../assets/Logo .svg";

import classes from "./Logo.module.css";

export const Logo = () => {
  return (
    <div>
      <img src={LogoImg} className={classes.Logo} />
    </div>
  );
};
