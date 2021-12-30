import styled from "styled-components";
import { colors } from "./../../Utils/Theme";
import ArrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

interface ButtonProps {
  text: string;
  type:
    | "PINK_DARK"
    | "PINK_LIGHT"
    | "BLACK"
    | "BORDERED"
    | "BORDER-LESS_BLACK"
    | "BORDER-LESS_COLOURED";
}

const Button = ({ text, type }: ButtonProps) => (
  <>
    <ButtonStyles props={type}>{text}</ButtonStyles>
  </>
);

export default Button;

const ButtonStyles = styled.button`
  outline: none;
  width: 16rem;
  height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  border: ${({ props }: string) => {
    switch (props) {
      case "PINK_DARK":
        return "none";
      case "PINK_LIGHT":
        return "none";
      case "BLACK":
        return "none";
      case "BORDERED":
        return "1px solid black";
      case "BORDER-LESS_BLACK":
        return "none";
      case "BORDER-LESS_COLOURED":
        return "none";
      default:
        colors.colorBlack;
        break;
    }
  }};
  background-color: ${({ props }: string) => {
    switch (props) {
      case "PINK_DARK":
        return colors.colorDarkPink;
      case "PINK_LIGHT":
        return colors.colorLightPink;
      case "BLACK":
        return colors.colorBlack;
      case "BORDERED":
        return "transparent";
      case "BORDER-LESS_BLACK":
        return "transparent";
      case "BORDER-LESS_COLOURED":
        return "transparent";
      default:
        colors.colorBlack;
        break;
    }
  }};
  color: ${({ props }: string) => {
    switch (props) {
      case "PINK_DARK":
        return colors.colorWhite;
      case "PINK_LIGHT":
        return colors.colorWhite;
      case "BLACK":
        return colors.colorWhite;
      case "BORDERED":
        return colors.colorBlack;
      case "BORDER-LESS_BLACK":
        return "transparent";
      case "BORDER-LESS_COLOURED":
        return colors.colorDarkPink;
      default:
        colors.colorBlack;
        break;
    }
  }};
`;
