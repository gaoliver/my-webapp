import { buttonInteraction } from 'src/constants/buttonInteraction';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { taskbarIconsShadow } from 'src/constants/taskbarIconsShadow';
import { colors } from 'src/constants/colors';
import { dark } from 'src/styles';

type TaskbarIconProps = HTMLAttributes<HTMLButtonElement>;

const TaskbarIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  max-width: fit-content;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 3px 2.5px;
  border-radius: 5px;
  border: 0;
  background-color: transparent;

  svg {
    path {
      object-position: center;
      object-fit: contain;
    }
  }
  ${buttonInteraction}

  :hover {
    cursor: pointer;
    background-color: ${(props) => rgba(props.theme.window, 0.5)};
    ${(props) =>
      props.theme === dark && {
        border: `0.5px solid ${rgba(colors.white, 0.3)}`
      }}
    ${taskbarIconsShadow}
  }
`;

export const TaskbarIcon: FC<TaskbarIconProps> = ({ children, ...props }) => {
  return <TaskbarIconWrapper {...props}>{children}</TaskbarIconWrapper>;
};
