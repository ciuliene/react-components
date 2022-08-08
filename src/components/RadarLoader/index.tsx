import React from "react";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
0% {
    width: 100px;
    height: 100px;
    opacity: 1;
    transform: translate(-50%, -50%) scale(0);
    border-width: 10px;
  }

  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    border-width: 10px;
  }
`;

type RadarCircleProps = {
  index: number;
  delay: number;
  color?: string;
  fill?: string;
};

const RadarCircle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-width: 0px;
  border-color: ${(props: RadarCircleProps): string =>
    props.fill === "true" ? "#FFFFFF00" : props.color || "#be97e8"};
  background-color: ${(props: RadarCircleProps): string =>
    props.fill !== "true" ? "#FFFFFF00" : props.color || "#be97e8"};
  border-style: solid;
  border-radius: 100%;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay: ${(props: RadarCircleProps): number => props.delay}s;
  animation-name: ${Animation};
`;

type RadarLoaderContainerProps = {
  left?: string;
  top?: string;
  size?: number;
  className?: string;
};

const RadarLoaderContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%)
    scale(${(props: RadarLoaderContainerProps): number => props.size || 1});
  left: ${(props: RadarLoaderContainerProps): string => props.left || "50%"};
  top: ${(props: RadarLoaderContainerProps): string => props.top || "50%"};
`;

type RadarLoaderProps = {
  left?: string;
  top?: string;
  size?: number;
  color?: string;
  fill?: boolean;
  className?: string;
};

export const RadarLoader: React.FC<RadarLoaderProps> = (props) => {
  return (
    <RadarLoaderContainer
      className={props.className}
      left={props.left}
      top={props.top}
      size={props.size}
    >
      {[0, 1].map((circle, i) => (
        <RadarCircle
          key={i}
          index={circle}
          delay={circle * 0.5}
          color={props.color}
          fill={(props.fill || false).toString()}
        />
      ))}
    </RadarLoaderContainer>
  );
};
