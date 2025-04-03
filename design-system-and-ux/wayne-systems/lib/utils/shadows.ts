import { Colors } from "./colors";
import { hexToRGB } from "./helper";

export const Shadows = {
  primary: `0 0 15px rgba(${hexToRGB(Colors.black[100])}, 0.15)`,
  secondary: `0 0 15px rgba(${hexToRGB(Colors.purple[900])})`
}