import { rgba } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Taskbar } from './components/_mobile';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: ${screen.availHeight}px;
  width: 100%;
  background-color: ${(props) => rgba(props.theme.primary, 0.5)};
`;

export const Mobile: FC = () => {
  return (
    <PageWrapper>
      <div>Mobile</div>
      <Taskbar />
    </PageWrapper>
  );
};
