import classes from "./About.module.css";
import { about } from "../../constants";

function About() {
  const { title, highlight, description, img, overlayImg } = about;

  return (
    <section className={classes.About}>
      <div className="container">
        <div className={classes.Content}>
          <h2 className={classes.Title}>
            {title} <span>{highlight}</span>
          </h2>
          <p className={classes.Description}>{description}</p>
        </div>
        <div className={classes.ImageContainer}>
          <img src={img} alt={title} className={classes.Image} />
          <img src={overlayImg} alt={title} className={classes.OverlayImg} />
        </div>
      </div>
    </section>
  );
}

export default About;
