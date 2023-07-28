import { TestimonialCardProps } from "../../../types";
import classes from "./Card.module.css";

import { AiFillStar } from "react-icons/ai";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";

function Card(props: TestimonialCardProps) {
  const { name, imgSrc, description } = props;

  return (
    <div className={classes.Card}>
      <div className={classes.User}>
        <div className={classes.ImageContainer}>
          <img src={imgSrc} alt={name} className={classes.Image} />
        </div>
        <p className={classes.Name}>{name}</p>
      </div>
      <p className={classes.Description}>
        <BiSolidQuoteLeft className={classes.IconQuoteRight} />
        {description}
        <BiSolidQuoteRight className={classes.IconQuoteLeft} />
      </p>
      <div className={classes.Icons}>
        <AiFillStar className={classes.Icon} />
        <AiFillStar className={classes.Icon} />
        <AiFillStar className={classes.Icon} />
        <AiFillStar className={classes.Icon} />
        <AiFillStar className={classes.Icon} />
      </div>
    </div>
  );
}

export default Card;
