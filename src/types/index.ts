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
