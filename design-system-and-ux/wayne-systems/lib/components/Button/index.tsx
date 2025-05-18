import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import { Typography_Text } from "../../utils/typography";
import { StaticImageData } from "next/image";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  rightIcon?: StaticImageData;
  buttonstyle: "default" | "outline";
}

export function Button({ text, rightIcon, ...props }: ButtonProps) {
  return (
    <Container aria-label={text} aria-disabled={props.disabled} {...props}>
      <Typography_Text>{text}</Typography_Text>
      {rightIcon && (
        <span aria-hidden="true">
          <img src={rightIcon.src}/>
        </span>
      )}
    </Container>
  );
}