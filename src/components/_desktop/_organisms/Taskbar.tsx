import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { Icon } from 'components/_shared';
import { TaskbarIcon } from '../_atoms';
import { ClockComponent } from '../_molecules/ClockComponent';

const TaskbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.window};
`;

export const Taskbar: FC = () => {
  return (
    <TaskbarWrapper>
      <TaskbarIcon>
        <Icon icon="logo" height="40px" color={useTheme().text} />
      </TaskbarIcon>
      <TaskbarIcon style={{ position: "fixed", right: 0 }}>
        <ClockComponent />
      </TaskbarIcon>
      <TaskbarIcon>
        <Icon icon='instagram' />
      </TaskbarIcon>
      <TaskbarIcon>
        <Icon icon='linkedin' />
      </TaskbarIcon>
    </TaskbarWrapper>
  );
};
