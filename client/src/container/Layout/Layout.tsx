import { LayoutProps } from "../../types";
import { Nav, Footer } from "../../components/index";
import Auth from "../Auth/Auth";
import NotificationContextProvider from "../../context/notification.context";
import ModalContextProvider from "../../context/modal.context";

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <ModalContextProvider>
      <NotificationContextProvider>
        <Auth />
        <Nav />
        {children}
        <Footer />
      </NotificationContextProvider>
    </ModalContextProvider>
  );
}

export default Layout;
