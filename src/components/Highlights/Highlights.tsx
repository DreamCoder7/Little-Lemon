import { Card } from "../index";
import { Highlight } from "../../constants/index";
import { Button } from "../UI";
import classes from "./Highlight.module.css";

function Highlights() {
  const { btn, card, title } = Highlight;

  return (
    <section className={classes.Highlight}>
      <div className="container">
        <div className={classes.Intro}>
          <h2 className={classes.Title}>{title}</h2>
          <Button link="/menu">{btn}</Button>
        </div>
        <div className={classes.Container}>
          {card.map(({ title, price, description, img }) => (
            <Card
              key={title}
              title={title}
              price={price}
              imgSrc={img}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
