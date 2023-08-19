import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ListItemProps {
  children: ReactNode;
  link: string;
}

export interface CustomButtonProps {
  children: ReactNode;
  link: string;
}

export interface HighlightCardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: string;
}

export interface TestimonialCardProps {
  name: string;
  imgSrc: string;
  description: string;
  star: number;
}

export interface ListProps {
  isNavOpen: boolean;
  clicked: () => void;
}

export interface BookingFormProps {
  availableTimes: string[];
  updateTimes: () => void;
}

export interface ToggleProps {
  clicked: () => void;
  isOpen: boolean;
}

export interface OverlayProps {
  show: boolean;
  clicked: () => void;
}

export interface SignupProps {
  setLoginMode: () => void;
}

export interface LoginProps {
  setSignupMode: () => void;
}

export type FormData = {
  name: string;
  email: string;
  password: string;
};

export type NotificationProps = {
  title: string;
  status: "success" | "error" | "pending";
  message: string;
};

export interface NotificationCtxProps {
  notification: NotificationProps | null;
  showNotification: (notificationData: NotificationProps) => void;
  hideNotification: () => void;
}

export interface AuthenticatedUserProps {
  name: string | null;
  email: string | null;
}
