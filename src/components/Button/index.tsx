import React from "react";
import styled from "styled-components";
import { str2rgb, getBlackOrWhite } from "../utils";

type ButtonTagProps = {
  color?: string;
};

const defaultColor = "#2090F0";

const bgColor = (props: ButtonTagProps): string => props.color || defaultColor;
const textColor = (props: ButtonTagProps): string =>
  getBlackOrWhite(props.color || defaultColor);

const bgColorOver = (props: ButtonTagProps): string => {
  let [r, g, b] = str2rgb(props.color || defaultColor);
  const offset = 30;
  return `rgb(${r + offset > 255 ? 255 : r + offset}, ${
    g + offset > 255 ? 255 : g + offset
  }, ${b + offset > 255 ? 255 : b + offset})`;
};

const bgColorActive = (props: ButtonTagProps): string => {
  let [r, g, b] = str2rgb(props.color || defaultColor);
  const offset = -30;
  return `rgb(${r + offset > 255 ? 255 : r + offset}, ${
    g + offset > 255 ? 255 : g + offset
  }, ${b + offset > 255 ? 255 : b + offset})`;
};

const ButtonTag = styled.div`
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 20px;
  background: ${bgColor};
  color: ${textColor};
  border-radius: 10px;
  box-shadow: 2px 2px 4px 0 #ccc;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background: ${bgColorOver};
  }

  &:active {
    background: ${bgColorActive};
  }
`;

type ButtonProps = {
  children?: string;
  onClick: () => any;
  color?: string;
  className?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonTag
      className={props.className}
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonTag>
  );
};
