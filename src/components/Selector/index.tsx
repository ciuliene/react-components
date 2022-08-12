import React, { useEffect } from "react";
import styled from "styled-components";
import { userSelectNone } from "../utils";

type SelectorTableProps = {
  id: string;
  active: boolean;
  colorOff?: string;
  colorOn?: string;
  textColor?: string;
  disabled?: boolean;
};

type SelectorPosProps = {
  active: boolean;
};

const SelectorPos = styled.div`
  position: absolute;
  background: #ffffff6f;
  border-radius: 40px;
  transform: ${(props: SelectorPosProps): string =>
    !props.active
      ? "translate(2px, 1.5px)"
      : "translate(calc(var(--width) / 2), 1.5px)"};
  width: calc(var(--width) / 2 - 3.5px);
  height: 25px;
  transition: all 0.2s;
  min-width: 32px;
`;

type SelectorProps = {
  id: string;
  onClick: () => any;
  status: boolean;
  items?: Array<string>;
  colorOff?: string;
  colorOn?: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
};

const SelectorTable = styled.table`
  margin: 0;
  text-align: center;
  transform: scale(1);
  width: var(--width);
  border-collapse: collapse;
  table-layout: fixed;
  background: ${(props: SelectorTableProps): string =>
    !props.active ? props.colorOff || "#444" : props.colorOn || "#444"};
  color: ${(props: SelectorTableProps): string => props.textColor || "#FFF"};
  opacity: ${(props: SelectorTableProps): string =>
    props.disabled ? "0.5" : "1"};
  font-family: inherit;
  border-radius: 100px;
  cursor: pointer;
  min-height: 30px;
  min-width: 60px;
  transition: all 0.2s;
  ${userSelectNone}
`;

const SelectorRow = styled.tr`
  & td {
    padding: 1px !important;
    display: table-cell !important;
    vertical-align: inherit;
    background: unset !important;
  }
`;

export const Selector: React.FC<SelectorProps> = (props) => {
  useEffect(() => {
    if (
      document.querySelectorAll<HTMLElement>(`#selector-table-${props.id}`)
        .length > 1
    ) {
      throw Error("The selector id must be unique");
    }

    const r = document.querySelector<HTMLElement>(
      `#selector-table-${props.id}`
    );

    if (r) {
      let length = 1.4;
      if (props.items) {
        length = Math.max(...props.items.map((el) => el.length));
      }
      r.style.setProperty("--width", length + 3 + "em");
    }
  }, [props]);

  return (
    <SelectorTable
      id={`selector-table-${props.id}`}
      className={props.className}
      onClick={(): any => {
        !props.disabled && props.onClick();
      }}
      active={props.status}
      colorOff={props.colorOff}
      colorOn={props.colorOn}
      textColor={props.textColor}
      disabled={props.disabled}
    >
      <tbody>
        <SelectorRow>
          <th>
            <SelectorPos active={props.status} />
          </th>
        </SelectorRow>
        <SelectorRow>
          <td>{props.items ? props.items[0] : " "}</td>
          <td>{props.items ? props.items[1] : " "}</td>
        </SelectorRow>
      </tbody>
    </SelectorTable>
  );
};
