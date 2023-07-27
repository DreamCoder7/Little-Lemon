import classes from "./Testimonial.module.css";
import { Testimonial as TestimonialData } from "../../constants/index";
import Card from "./Card/Card";

function Testimonial() {
  const { card, title } = TestimonialData;

  return (
    <section className={classes.Testimonial}>
      <div className="container">
        <h2 className={classes.Title}>{title}</h2>
        <div className={classes.CardContainer}>
          {card.map(({ name, img, star, description }) => (
            <Card
              name={name}
              imgSrc={img}
              key={name}
              description={description}
              star={star}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
