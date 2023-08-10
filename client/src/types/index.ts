import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ListItemProps {
  children: ReactNode;
  link: string;
  color: string;
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
  flex: string;
  color: string;
}

export interface BookingFormProps {
  availableTimes: string[];
  updateTimes: () => void;
}
