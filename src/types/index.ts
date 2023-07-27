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

export interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  price: string;
}
