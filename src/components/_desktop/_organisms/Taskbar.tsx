import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/_shared';
import { TaskbarIcon } from '../_atoms';

const TaskbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.window};
`;

export const Taskbar: FC = () => {
  return (
    <TaskbarWrapper>
      <TaskbarIcon>
        <Icon icon="logo" height="40px" />
      </TaskbarIcon>
    </TaskbarWrapper>
  );
};
