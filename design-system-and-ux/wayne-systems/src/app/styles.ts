'use client'
import styled from "styled-components";
import { Spacings } from "../../lib/utils/spacings";
import { Colors } from "../../lib/utils/colors";
import Image from 'next/image';

export const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: ${Colors.darkGray[500]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  padding-left: ${Spacings.s7};
  padding-top: ${Spacings.s8};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: ${Spacings.s6} 0;
  color: ${Colors.white[900]};
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
`;
