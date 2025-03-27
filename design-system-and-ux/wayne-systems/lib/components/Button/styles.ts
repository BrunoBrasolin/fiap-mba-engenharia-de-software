'use client'
import styled from "styled-components";
import { ButtonProps } from ".";
import { Colors } from "../../utils/colors";
import { Spacings } from "../../utils/spacings";
import { Radius } from "../../utils/radius"; 

export const Container = styled.button<Pick<ButtonProps, "buttonStyle">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white[900]};
  padding: ${Spacings.s3} ${Spacings.s2};
  border-radius: ${Radius.r2};
  color: ${Colors.pink[900]};
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
  }
`;