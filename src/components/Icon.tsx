import { IconOption, icons } from 'constants/icons';
import { rgb } from 'polished';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type IconProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: IconOption;
  rotate?: number;
  color?: string;
  size?: number;
  height?: string | number;
  width?: string | number;
};

const StyledIconWrapper = styled.span<
  HTMLAttributes<HTMLSpanElement> & {
    rotate?: number;
    width?: string | number;
    height?: string | number;
    color?: string;
  }
>`
  position: relative;
  line-height: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`};
  svg {
    width: 100%;
    height: 100%;
  }
  path {
    fill: ${props => props.color} !important;
  }
`;

export const Icon: FC<IconProps> = ({
  size,
  width,
  height,
  icon,
  rotate,
  ...props
}) => {
  const IconComponent = icons[icon];

  return (
    <StyledIconWrapper
      rotate={rotate}
      width={width || size}
      height={height || size}
      color={props.color}
      {...props}
    >
      <IconComponent
        height="100%"
        width="100%"
      />
    </StyledIconWrapper>
  );
};
