import { Button } from "../UI/index";
import HeroImg from "../../assets/hero.jpg";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.Header}>
      <div className="container">
        <div className={classes.Content}>
          <h1 className={classes.Title}>
            Little Lemon <span>Chicago</span>
          </h1>
          <p className={classes.Intro}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button link="/reservation">Reserve a Table</Button>
        </div>
        <div className={classes.ImageContainer}>
          <img src={HeroImg} alt="hero" className={classes.Image} />
        </div>
      </div>
    </header>
  );
}

export default Header;
