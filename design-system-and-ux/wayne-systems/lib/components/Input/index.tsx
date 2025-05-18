"use client";

import React, { InputHTMLAttributes, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Container, ErrorText, IconContainer, InputWrapper, Label, StyledInput } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  rightIcon?: StaticImageData;
  value: string;
  onClickIcon?: () => void;
}

export function Input({
  label,
  error,
  rightIcon,
  value,
  onClickIcon,
  ...props
}: InputProps) {
  const hasError = Boolean(error);

  return (
    <Container $haserror={hasError}>
      <Label $haserror={hasError} value={value}>{label}</Label>

      <InputWrapper>
        <StyledInput $haserror={hasError} {...props} />
        {rightIcon && (
          <IconContainer onClick={() => {
            if (onClickIcon) onClickIcon();
          }}
            role={onClickIcon ? "button" : undefined}
            aria-hidden={onClickIcon ? "false" : "true"}>
            <Image
              src={rightIcon}
              alt=""
              width={24}
              height={24}
              unoptimized
            />
          </IconContainer>
        )}
      </InputWrapper>

      {hasError && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
