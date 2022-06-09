import { buttonInteraction } from 'src/constants/buttonInteraction';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

type TaskbarIconProps = HTMLAttributes<HTMLButtonElement>;

const TaskbarIconWrapper = styled.button`
  height: 45px;
  min-width: 60px;
  max-width: fit-content;
  padding: 8px;
  border: 0;
  background-color: transparent;
  ${buttonInteraction}
  :hover {
    background-color: ${(props) => rgba(props.theme.window, 0.3)};
  }
`;

export const TaskbarIcon: FC<TaskbarIconProps> = ({ children, ...props }) => {
  return <TaskbarIconWrapper {...props}>{children}</TaskbarIconWrapper>;
};
