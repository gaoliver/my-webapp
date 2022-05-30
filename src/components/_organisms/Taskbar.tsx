import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const TaskbarWrapper = styled(Flex)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Taskbar: FC = () => {
  return <TaskbarWrapper>Taskbar</TaskbarWrapper>;
};
