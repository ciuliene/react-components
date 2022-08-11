import React from "react";
import styled, { keyframes } from "styled-components";
import { loaderPosition, translateLoader } from "../utils";

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
  bubbleSize?: number;
  color?: string;
};

const translateBubble = (props: BubbleProps): string => {
  return props.x + "px, " + props.y + "px";
};

const bubbleSize = (props: BubbleProps): string =>
  (props.bubbleSize || 1).toString();

const Bubble = styled.div`
  background: ${(props: BubbleProps): string => props.color || "#DDD"};
  border-radius: 100%;
  position: absolute;
  transform: translate(${translateBubble}) scale(${bubbleSize});
  animation-name: ${Animation};
  animation-duration: 0.8s;
  animation-delay: ${(props: BubbleProps): string =>
    `calc(0.07s * ${props.index})`};
  animation-iteration-count: infinite;
  padding: 0 !important;
`;

const bubblePos = [
  { x: 40, y: 0 },
  { x: 60, y: 6 },
  { x: 74, y: 20 },
  { x: 80, y: 40 },
  { x: 74, y: 60 },
  { x: 60, y: 74 },
  { x: 40, y: 80 },
  { x: 20, y: 74 },
  { x: 6, y: 60 },
  { x: 0, y: 40 },
  { x: 6, y: 20 },
  { x: 20, y: 6 },
];

type BubbleLoaderContainerProps = {
  left?: any;
  top?: any;
  className?: string;
};

const BubbleLoaderContainer = styled.div`
  width: 95px;
  height: 95px;
  position: ${(props: BubbleLoaderContainerProps): string =>
    loaderPosition(props.left, props.top)};
  left: ${(props: BubbleLoaderContainerProps): string => props.left};
  top: ${(props: BubbleLoaderContainerProps): string => props.top};
  transform: translate(
    ${(props: BubbleLoaderContainerProps): string =>
      translateLoader(props.left, props.top)}
  );
`;

type BubbleLoaderProps = {
  left?: any;
  top?: any;
  bubbleSize?: any;
  color?: string;
  className?: string;
};

export const BubbleLoader: React.FC<BubbleLoaderProps> = (props) => {
  return (
    <BubbleLoaderContainer
      left={props.left}
      top={props.top}
      className={props.className}
    >
      {bubblePos.map((bubble, i) => (
        <Bubble
          key={i}
          index={i}
          x={bubble.x}
          y={bubble.y}
          left={props.left}
          top={props.top}
          bubbleSize={props.bubbleSize}
          color={props.color}
        />
      ))}
    </BubbleLoaderContainer>
  );
};
