import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { userSelectNone } from "../utils";

type DropdownCaretProps = {
  isOpen?: boolean;
};

const DropdownCaret = styled.div`
  transition: all 0.2s;
  transform: rotate(
    ${(props: DropdownCaretProps): string => (props.isOpen ? "0" : "180")}deg
  );
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
`;

type DropdownToggleProps = {
  disabled?: boolean;
  width: number;
};

const DropdownToggle = styled.div`
  opacity: ${(props: DropdownToggleProps): string =>
    props.disabled ? "0.6" : "1"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${(props: DropdownToggleProps): string =>
    props.width.toString() + "px"};
`;

type DropdownMenuProps = {
  isOpen?: boolean;
};

const DropdownMenu = styled.div`
  position: absolute;
  margin-top: 12px;
  height: 200px !important;
  overflow: auto;
  transform-origin: top;
  transition: all 0.2s;
  transform: rotateX(
    ${(props: DropdownMenuProps): string => (props.isOpen ? "0" : "90")}deg
  );
  z-index: 1;
`;

type DropdownItemProps = {
  text?: string;
  checkbox?: boolean;
  status?: boolean;
  onSelect?: (e: any) => any;
  disabled?: boolean;
  header?: boolean;
  divider?: boolean;
};

const DropdownItem = styled.div`
  padding: ${(props: DropdownItemProps): string =>
    props.divider ? "3px" : "12px"};
  background: ${(props: DropdownItemProps): string =>
    props.header ? "#f0ffff" : "#fcfcfc"};
  text-align: left !important;
  display: flex !important;
  align-items: left !important;
  cursor: ${(props: DropdownItemProps): string =>
    props.header || props.divider || props.disabled ? "auto" : "pointer"};
  transition: all 0.2s;
  font-weight: ${(props: DropdownItemProps): string =>
    props.header ? "700" : "auto"};

  color: ${(props: DropdownItemProps): string =>
    props.disabled ? "#AAA" : "#000"};

  &:hover {
    background: ${(props: DropdownItemProps): string =>
      props.header || props.divider || props.disabled ? "" : "#f0f0f0"};
  }

  &:after {
    content: "";
    position: relative !important;
    display: ${(props: DropdownItemProps): string =>
      props.divider ? "flex" : "none"};
    width: 100%;
    height: 1px;
    background: #aaa;
  }
`;

const DropdownTag = styled.div`
  ${userSelectNone}
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 6px;
  background: #f0f0f0;
`;

type DropdownProps = {
  items: DropdownItemProps[];
  title?: string;
  disabled?: boolean;
  selected?: number;
  onSelect?: (value: string, i: number) => any;
  className?: string;
};

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const item = document.getElementById(`dropdown-item-0`);

    setWidth(item?.offsetWidth || 0);
  }, [props]);

  return (
    <DropdownTag className={props.className}>
      <DropdownToggle
        disabled={props.disabled || false}
        width={width}
        onClick={() => {
          if (!props.disabled) setIsOpen(!isOpen);
        }}
      >
        <span>
          {props.title !== undefined
            ? props.title
            : props.items[props.selected || 0].text}
        </span>
        <DropdownCaret isOpen={isOpen} />
      </DropdownToggle>

      <DropdownMenu isOpen={isOpen}>
        {props.items.map((item, i) => (
          <DropdownItem
            key={i}
            id={`dropdown-item-${i}`}
            header={item.header}
            divider={item.divider}
            disabled={item.disabled}
            onClick={(e) => {
              if (!item.divider && !item.header && !item.disabled) {
                props.onSelect && props.onSelect(item.text || "", i);
                if (!item.checkbox) {
                  setIsOpen(!isOpen);
                } else {
                  item.onSelect && item.onSelect(e);
                }
              }
            }}
          >
            {!item.checkbox ? (
              <span>{item.text}</span>
            ) : (
              <Checkbox
                status={item.status || false}
                onClick={() => {}}
                text={item.text}
              />
            )}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownTag>
  );
};
