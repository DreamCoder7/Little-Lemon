import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";

import { CardProps } from "../../types";
import classes from "./Card.module.css";

function Card(props: CardProps) {
  const { description, imgSrc, price, title } = props;

  return (
    <div className={classes.Card}>
      <div className={classes.ImageContainer}>
        <img src={imgSrc} alt={title} className={classes.Image} />
      </div>
      <div className={classes.Content}>
        <div>
          <h3 className={classes.Title}>{title}</h3>
          <p className={classes.Price}>{price}</p>
        </div>
        <p className={classes.Description}>{description}</p>
        <Link to="/order" className={classes.Link}>
          Order a delivery
          <MdDeliveryDining className={classes.Icon} />
        </Link>
      </div>
    </div>
  );
}

export default Card;
