import { LayoutProps } from "../../types";
import { Nav, Footer } from "../../components/index";
import Auth from "../Auth/Auth";

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Auth />
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
