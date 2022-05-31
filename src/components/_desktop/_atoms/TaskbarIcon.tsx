import { buttonInteraction } from 'constants/buttonInteraction';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type TaskbarIconProps = HTMLAttributes<HTMLButtonElement>

const TaskbarIconWrapper = styled.button`
  height: 45px;
  width: fit-content;
  padding: 8px;
  border: 0;
  background-color: transparent;
  ${buttonInteraction}
  :hover {
    background-color: ${props => props.theme.window};
  }
`;

export const TaskbarIcon: FC<TaskbarIconProps> = ({ children, ...props }) => {
  return (
    <TaskbarIconWrapper {...props}>
      {children}
    </TaskbarIconWrapper>
  );
};
