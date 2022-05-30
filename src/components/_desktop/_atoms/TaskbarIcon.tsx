import React, { FC } from 'react';
import styled from 'styled-components';

const TaskbarIconWrapper = styled.button`
  height: 40px;
  width: fit-content;
  padding: 5px;
  filter: brightness(0.8);
`;

export const TaskbarIcon: FC = ({ children }) => {
  return <TaskbarIconWrapper>{children}</TaskbarIconWrapper>;
};
