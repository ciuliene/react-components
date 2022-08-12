import React from "react";
import styled from "styled-components";
import { userSelectNone } from "../utils";

type CheckboxTagProps = {
  disabled?: boolean;
};

const CheckboxTag = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: ${(props: CheckboxTagProps) =>
    !props.disabled ? "pointer" : "auto"};
  opacity: ${(props: CheckboxTagProps) => (!props.disabled ? "1" : "0.4")};
  ${userSelectNone};
`;

type CheckboxInputProps = {
  disabled?: boolean;
  status: boolean;
};

const CheckboxInput = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid
    ${(props: CheckboxInputProps): string =>
      !props.status ? "#bbb" : "#2080e0"};
  border-radius: 2px;
  background: ${(props: CheckboxInputProps): string =>
    !props.status ? "#FFF" : "#2080e0"};
  transition: all 0.2s;

  &:hover {
    border-color: ${(props: CheckboxInputProps): string =>
      props.disabled ? "" : !props.status ? "#aaa" : "#2080e0"};
    background: ${(props: CheckboxInputProps): string =>
      props.disabled ? "" : !props.status ? "#fbfbfb" : "#0565c5"};
  }

  &:before,
  &:after {
    display: ${(props: CheckboxInputProps): string =>
      props.status ? "auto" : "none"};
    content: "";
    position: absolute;
    display: flex !important;
    width: 2px;
    height: 6px;
    border-radius: 2px;
    background: #fff;
    z-index: 1000;
    transform: translate(3px, 7px) rotate(-40deg);
  }

  &:after {
    content: "";
    height: 12px;
    transform: translate(8px, 1px) rotate(40deg);
  }
`;

type CheckboxProps = {
  status: boolean;
  onClick: (e?: any) => any;
  text?: string;
  disabled?: boolean;
  className?: string;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <CheckboxTag
      className={props.className}
      onClick={(e) => !props.disabled && props.onClick(e)}
      disabled={props.disabled}
    >
      <CheckboxInput status={props.status} disabled={props.disabled} />
      <span>{props.text}</span>
    </CheckboxTag>
  );
};
