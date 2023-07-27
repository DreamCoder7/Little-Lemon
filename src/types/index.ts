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
