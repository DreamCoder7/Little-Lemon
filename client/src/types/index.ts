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
