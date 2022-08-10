import React from "react";
import styled from "styled-components";
import { str2rgb, getBlackOrWhite } from "../utils";

type ButtonTagProps = {
  color?: string;
  disabled?: boolean;
};

const defaultColor = "#2090F0";

const bgColor = (props: ButtonTagProps): string => props.color || defaultColor;
const textColor = (props: ButtonTagProps): string =>
  getBlackOrWhite(props.color || defaultColor);

const opacity = (props: ButtonTagProps): string =>
  !props.disabled ? "1" : "0.5";

const bgColorOver = (props: ButtonTagProps): string => {
  let [r, g, b] = str2rgb(props.color || defaultColor);
  const offset = !props.disabled ? 30 : 0;
  return `rgb(${r + offset > 255 ? 255 : r + offset}, ${
    g + offset > 255 ? 255 : g + offset
  }, ${b + offset > 255 ? 255 : b + offset})`;
};

const bgColorActive = (props: ButtonTagProps): string => {
  let [r, g, b] = str2rgb(props.color || defaultColor);
  const offset = !props.disabled ? -30 : 0;
  return `rgb(${r + offset > 255 ? 255 : r + offset}, ${
    g + offset > 255 ? 255 : g + offset
  }, ${b + offset > 255 ? 255 : b + offset})`;
};

const cursor = (props: ButtonTagProps): string => {
  return !props.disabled ? "pointer" : "";
};

const ButtonTag = styled.div`
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 20px;
  background: ${bgColor};
  opacity: ${opacity};
  color: ${textColor};
  border-radius: 6px;
  box-shadow: 2px 2px 4px 0 #ccc;
  cursor: ${cursor};
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
  onClick: (e?: any) => any;
  color?: string;
  disabled?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonTag
      className={props.className}
      color={props.color}
      onClick={(e) => !props.disabled && props.onClick(e)}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonTag>
  );
};
