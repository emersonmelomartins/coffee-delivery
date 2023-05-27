import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
