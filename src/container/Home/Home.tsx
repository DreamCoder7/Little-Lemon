import { Header, Highlights } from "../../components/index";
import classes from "./Home.module.css";

function Home() {
  return (
    <main className={classes.Home}>
      <Header />
      <Highlights />
    </main>
  );
}

export default Home;
