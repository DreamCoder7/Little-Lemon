import classes from "./Overlay.module.css";
import { OverlayProps } from "../../../types/index";

function Overlay(props: OverlayProps) {
  const { clicked, show } = props;

  return show ? (
    <div className={classes.Overlay} onClick={clicked}></div>
  ) : null;
}

export default Overlay;
