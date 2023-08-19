import { createContext, ReactNode, useState, useEffect } from "react";
import { NotificationCtxProps, NotificationProps } from "../types";

export const NotificationContext = createContext<NotificationCtxProps>({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

const NotificationContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationProps | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  const showNotificationHandler = (notificationData: NotificationProps) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
