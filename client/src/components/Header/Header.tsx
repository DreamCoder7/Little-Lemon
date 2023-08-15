import HeroImg from "../../assets/hero.jpg";
import classes from "./Header.module.css";
import { Button } from "../UI/index";
import { Header as HeaderData } from "../../constants";

function Header() {
  const { btn, highlight, text, title } = HeaderData;

  return (
    <header className={classes.Header}>
      <div className="container">
        <div className={classes.Content}>
          <h1 className={classes.Title}>
            {title} <span>{highlight}</span>
          </h1>
          <p className={classes.Intro}>{text}</p>
          <Button link="/reservation">{btn}</Button>
        </div>
        <div className={classes.ImageContainer}>
          <img src={HeroImg} alt="hero" className={classes.Image} />
        </div>
      </div>
    </header>
  );
}

export default Header;
