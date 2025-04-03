import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";
import { Typography_Text } from "../../utils/typography";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  rightIcon?: ReactNode;
  buttonstyle: "default" | "outline";
}

export function Button({ text, rightIcon, ...props }: ButtonProps) {
  return (
    <Container aria-label={text} aria-disabled={props.disabled} {...props}>
      <Typography_Text>{text}</Typography_Text>
      {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
    </Container>
  );
}