import { lighten } from 'polished';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type TaskbarIconProps = HTMLAttributes<HTMLButtonElement>

const TaskbarIconWrapper = styled.button`
  height: 45px;
  width: fit-content;
  padding: 8px;
  border: 0;
  background-color: transparent;
  :hover {
    background-color: ${props => lighten(0.1, props.theme.window)};
    transition: ease-in-out 0.2s;
    cursor: pointer;
  }
  :active {
    filter: brightness(0.8);
  }
`;

export const TaskbarIcon: FC<TaskbarIconProps> = ({ children, ...props }) => {
  return (
    <TaskbarIconWrapper {...props}>
      {children}
    </TaskbarIconWrapper>
  );
};
