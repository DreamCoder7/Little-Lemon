import { Header, Highlights, Testimonial, About } from "../../components/index";
import classes from "./Home.module.css";

function Home() {
  return (
    <main className={classes.Home}>
      <Header />
      <Highlights />
      <Testimonial />
      <About />
    </main>
  );
}

export default Home;
