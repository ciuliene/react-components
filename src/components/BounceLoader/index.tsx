import React from "react";
import styled, { keyframes } from "styled-components";
import { loaderPosition, translateLoader } from "../utils";

const Animation0 = keyframes`
  0% {
    transform: scale(0);
  }
  16% {
    transform: scale(1);
  }
`;

const Animation1 = keyframes`
  16% {
    transform: scale(0);
  }
  33% {
    transform: scale(1);
  }
`;

const Animation2 = keyframes`
  33% {
    transform: scale(0);
  }
  49% {
    transform: scale(1);
  }
`;

type BouncingBallProps = {
  index: number;
  color?: string;
  size?: number;
};

const BouncingBall = styled.div`
  width: ${(props: BouncingBallProps): number =>
    Math.floor((props.size || 1) * 20)}px;
  height: ${(props: BouncingBallProps): number =>
    Math.floor((props.size || 1) * 20)}px;
  background: ${(props: BouncingBallProps): string => props.color || "#DDD"};
  border-radius: 100%;
  margin-left: 6px;
  transform: scale(0);
  animation-duration: 0.7s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: ${(props: BouncingBallProps): any => {
    switch (props.index) {
      case 0:
        return Animation0;
      case 1:
        return Animation1;
      case 2:
        return Animation2;
      default:
        return "";
    }
  }};
`;

type BounceLoaderContainerProps = {
  left?: any;
  top?: any;
};

const BounceLoaderContainer = styled.div`
  display: flex;
  position: ${(props: BounceLoaderContainerProps): string =>
    loaderPosition(props.left, props.top)};
  transform: translate(
    ${(props: BounceLoaderContainerProps): string =>
      translateLoader(props.left, props.top)}
  );
  left: ${(props: BounceLoaderContainerProps): string => props.left};
  top: ${(props: BounceLoaderContainerProps): string => props.top};
`;

type BounceLoaderProps = {
  left?: any;
  top?: any;
  color?: string;
  size?: number;
  className?: string;
};

export const BounceLoader: React.FC<BounceLoaderProps> = (props) => {
  return (
    <BounceLoaderContainer
      left={props.left}
      top={props.top}
      className={props.className}
    >
      {[0, 1, 2].map((ball, i) => (
        <BouncingBall
          key={i}
          index={ball}
          color={props.color}
          size={props.size}
        />
      ))}
    </BounceLoaderContainer>
  );
};
