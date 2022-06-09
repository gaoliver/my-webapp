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
  minimizeWindow,
  useAppSelector
} from 'src/redux';
import { useDispatch } from 'react-redux';

import testImage from 'src/assets/images/GabrielRamos-blackIcon.png';

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
          label="Teste de ícone de ícone esse é o teste que eu tô fazendo"
          imageSource={testImage}
          id="teste"
        >
          <>Olá!</>
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
