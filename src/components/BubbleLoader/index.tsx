import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0% {width: 0; height: 0;}
    50% {width: 16px; height: 16px;}
    100% {width: 0; height: 0;}
  `;

type BubbleProps = {
  index: number;
  x: number;
  y: number;
  left?: any;
  top?: any;
  color?: string;
};

const Bubble = styled.div`
  width: 0;
  height: 0;
  background: ${(props: BubbleProps): string => props.color || "#DDD"};
  border-radius: 100%;
  position: absolute;
  transform: ${(props: BubbleProps): string =>
    `translate(calc(${props.x}px), calc(${props.y}px))`}};
  left: ${(props: BubbleProps): any => props.left};
  top: ${(props: BubbleProps): any => props.top};
  animation-name: ${Animation};
  animation-duration: 0.8s;
  animation-delay: ${(props: BubbleProps): string =>
    `calc(0.07s * ${props.index})`};
  animation-iteration-count: infinite;
`;

type BubbleLoaderProps = {
  left?: any;
  top?: any;
  color?: string;
  className?: string;
};

const bubblePos = [
  { x: -8, y: -48 },
  { x: 12, y: -42 },
  { x: 26, y: -28 },
  { x: 32, y: -8 },
  { x: 26, y: 12 },
  { x: 12, y: 26 },
  { x: -8, y: 32 },
  { x: -28, y: 26 },
  { x: -42, y: 12 },
  { x: -48, y: -8 },
  { x: -42, y: -28 },
  { x: -28, y: -42 },
];

export const BubbleLoader: React.FC<BubbleLoaderProps> = (props) => {
  return (
    <div className={props.className}>
      {bubblePos.map((bubble, i) => (
        <Bubble
          index={i}
          x={bubble.x}
          y={bubble.y}
          left={props.left}
          top={props.top}
          color={props.color}
        />
      ))}
    </div>
  );
};
