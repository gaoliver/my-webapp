import {
  Taskbar,
  Window,
  TaskSettings,
  DesktopIcon
} from 'src/components/_desktop';
import { rgba } from 'polished';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import {
  AppState,
  closeWindow,
  getInfo,
  getTools,
  minimizeWindow,
  useAppSelector
} from 'src/redux';
import { useDispatch } from 'react-redux';

import testImage from 'src/assets/images/GabrielRamos-blackIcon.png';
import { AboutMe } from './components/_shared';

const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => rgba(props.theme.primary, 0.7)};
  ::selection {
    height: auto;
    background-color: aliceblue;
  }
`;

export const Desktop: FC = () => {
  const dispatch = useDispatch();
  const { windowsList } = useAppSelector((state: AppState) => state);

  function handleToggleWindow(id: string) {
    dispatch(minimizeWindow(id));
  }

  function onCloseWindow(id: string) {
    dispatch(closeWindow(id));
  }

  useEffect(() => {
    dispatch(getInfo());
    dispatch(getTools());
  }, []);

  return (
    <PageWrapper>
      <div
        id="desktop"
        style={{
          flex: 1,
          position: 'relative'
        }}
      >
        <DesktopIcon
          label="About me"
          imageSource={testImage}
          id="about_me"
        >
          <AboutMe />
        </DesktopIcon>
        {windowsList.map((window) => {
          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              onClose={onCloseWindow}
            >
              {window.content}
            </Window>
          );
        })}
        <TaskSettings />
      </div>
      <Taskbar windowsList={windowsList} onClickWindow={handleToggleWindow} />
    </PageWrapper>
  );
};
