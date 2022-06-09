import {
  Taskbar,
  Window,
  TaskSettings,
  DesktopIcon,
  Portfolio
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
import { AboutMe } from './components/_shared';

import blackIcon from 'src/assets/images/GabrielRamos-blackIcon.png';
import folderIcon from 'src/assets/images/folder.png';

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

const HomeInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  width: 500px;
  height: 200px;
  place-self: center;
  transform: translateY(30vh);
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.window};
  user-select: none;
`;

export const Desktop: FC = () => {
  const dispatch = useDispatch();
  const { windowsList, MYINFO } = useAppSelector((state: AppState) => state);

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
      <HomeInfoWrapper>
        <h1>{`${MYINFO?.name} ${MYINFO?.surname}`}</h1>
        <h2>{MYINFO?.position}</h2>
        <h3>{`@ ${MYINFO?.company}`}</h3>
      </HomeInfoWrapper>
      <div
        id="desktop"
        style={{
          flex: 1,
          position: 'relative'
        }}
      >
        <DesktopIcon label="About me" imageSource={blackIcon} id="about_me">
          <AboutMe />
        </DesktopIcon>
        <DesktopIcon label="Portfolio" imageSource={folderIcon} id="portfolio">
          <Portfolio />
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
