import { Link } from "react-router-dom";

import { CustomButtonProps } from "../../../types";
import classes from "./Button.module.css";

function Button(props: CustomButtonProps) {
  const { children, link } = props;

  return (
    <Link to={link} className={classes.Button} role="button">
      {children}
    </Link>
  );
}

export default Button;
