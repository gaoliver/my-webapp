import { Taskbar, Window } from 'src/components/_desktop';
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

interface DesktopProps {
  onToggleTheme: () => void;
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => rgba(props.theme.primary, 0.7)};
`;

export const Desktop: FC<DesktopProps> = () => {
  const dispatch = useDispatch();
  const { windowsList } = useAppSelector((state: AppState) => state);

  function handleToggleWindow(id: string) {
    dispatch(minimizeWindow(id));
  }

  function onCloseWindow(id: string) {
    dispatch(closeWindow(id));
  }

  useEffect(() => {
    dispatch(getInfo())
  }, [])

  return (
    <PageWrapper>
      <div
        id="desktop"
        style={{
          flex: 1,
          position: 'relative'
        }}
      >
        {windowsList.map((window) => {
          return (
            <Window
              key={window.id}
              id={window.id}
              title={window.title}
              onClose={onCloseWindow}
              onMinimize={handleToggleWindow}
            >
              {window.content}
            </Window>
          );
        })}
      </div>
      <Taskbar windowsList={windowsList} onClickWindow={handleToggleWindow} />
    </PageWrapper>
  );
};
