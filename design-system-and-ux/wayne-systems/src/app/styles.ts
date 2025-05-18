"use client";
import styled from "styled-components";
import Image from "next/image";
import { Spacings } from "../../lib/utils/spacings";
import { Colors } from "../../lib/utils/colors";

export const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: ${Colors.darkGray[500]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Spacings.s8} ${Spacings.s7};
  width: ${Spacings.s10};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.white[900]};
  margin: ${Spacings.s4} 0;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacings.s4};
  width: ${Spacings.s11};
  margin-bottom: ${Spacings.s4};
  align-self: center;
`;

export const GothamImage = styled(Image)`
  position: absolute;
  bottom: ${Spacings.s8};
  right: ${Spacings.s7};
  z-index: 1;
`;

export const VectorImage = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
