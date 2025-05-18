"use client";

import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { Spacings } from "../../utils/spacings";
import { Radius } from "../../utils/radius";

export const Container = styled.div<{ $haserror: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${Spacings.s4};
`;

export const Label = styled.label<{ $haserror: boolean, value: string }>`
  position: absolute;
  top: ${({ value }) => (value.length > 0 ? "0" : "50%")};
  transform: translateY(-50%);
  margin-left: ${Spacings.s2};
  margin-bottom: ${Spacings.s1};
  font-weight: bold;
  background-color: ${Colors.darkGray[500]};
  color: ${({ $haserror }) => $haserror ? Colors.pink[500] : Colors.pink[900]};
  transition: 0.2s;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled.input<{ $haserror: boolean }>`
  width: 100%;
  padding: ${Spacings.s3} ${Spacings.s2};
  border-radius: ${Radius.r2};
  border: ${Spacings.s9} solid
    ${({ $haserror }) =>
    $haserror ? Colors.pink[500] : Colors.pink[900]};
  background-color: transparent;
  color: ${Colors.white[900]};
  outline: none;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: ${Spacings.s2};
  transform: translateY(-50%);
  cursor: pointer;
`;

export const ErrorText = styled.span`
  margin-top: ${Spacings.s1};
  margin-left: ${Spacings.s2};
  font-size: 0.875rem;
  color: ${Colors.pink[500]};
  position: absolute;
  top: 100%;
`;
