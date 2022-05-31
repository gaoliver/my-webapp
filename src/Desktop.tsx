import { Taskbar, Window } from 'components/_desktop';
import { rgba } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';

interface DesktopProps {
  onToggleTheme: () => void;
}

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${props => rgba(props.theme.primary, 0.7)};
`;

export const Desktop: FC<DesktopProps> = () => {
  return (
    <PageWrapper>
      <Window></Window>
      <Taskbar />
    </PageWrapper>
  );
};
