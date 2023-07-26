import { LayoutProps } from "../../types";
import { Nav, Footer } from "../../components/index";

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
