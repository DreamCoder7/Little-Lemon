import { LayoutProps } from "../../types";
import { Nav, Footer } from "../../components/index";

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
