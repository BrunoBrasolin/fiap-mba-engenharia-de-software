'use client'
import styled from "styled-components";
import { ButtonProps } from ".";
import { Colors } from "../../utils/colors";
import { Spacings } from "../../utils/spacings";
import { Radius } from "../../utils/radius";
import { Shadows } from "../../utils/shadows";
import { Transitions } from "../../utils/transitions";
import { Borders } from "../../utils/borders";

export const Container = styled.button<Pick<ButtonProps, "buttonstyle">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white[900]};
  padding: ${Spacings.s3} ${Spacings.s2};
  border-radius: ${Radius.r2};
  color: ${Colors.pink[900]};
  cursor: pointer;
  border: ${Borders.b0};
  box-shadow: ${Shadows.primary};
  transition: ${Transitions.t0};
  align-self: flex-end;

  img {
    height: 24px;
    width: 24px;
    margin-left: ${Spacings.s2};
  }

  &:hover {
    box-shadow: ${Shadows.secondary};
  }
`;