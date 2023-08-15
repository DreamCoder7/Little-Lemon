import { ToggleProps } from "../../../types";
import { HiOutlineMenuAlt3 } from "../../../constants/index";

import classes from "./Toggle.module.css";

function Toggle(props: ToggleProps) {
  const { isOpen, clicked } = props;

  return (
    <button onClick={clicked} className={classes.Toggle}>
      {isOpen ? null : <HiOutlineMenuAlt3 className={classes.Icon} />}
    </button>
  );
}

export default Toggle;
