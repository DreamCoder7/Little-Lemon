import { Header, Highlights, Testimonial } from "../../components/index";
import classes from "./Home.module.css";

function Home() {
  return (
    <main className={classes.Home}>
      <Header />
      <Highlights />
      <Testimonial />
    </main>
  );
}

export default Home;
