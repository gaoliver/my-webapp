import { rgba } from 'polished';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { AppScreen, ScreenIcon, Taskbar } from './components/_mobile';

import blackIcon from 'src/assets/images/GabrielRamos-blackIcon.png';
import folderIcon from 'src/assets/images/folder.png';
import EmailIcon from 'src/assets/images/email.png';
import { closeWindow, getInfo, getPortfolio, getTools, useAppSelector } from './redux';
import { AboutMe } from './components/_shared';
import { useDispatch } from 'react-redux';

const ScreenWrapper = styled.div`
  display: block;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => rgba(props.theme.primary, 0.4)};
`;

const InnerPage = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

const FolderIconContainer = styled.div`
  display: inline-block;
`;

export const Mobile: FC = () => {
  const dispatch = useDispatch();
  const { windowsList } = useAppSelector((state) => state);

  function onCloseWindow(id: string) {
    dispatch(closeWindow(id));
  }

  useEffect(() => {
    dispatch(getInfo());
    dispatch(getPortfolio());
    dispatch(getTools());
  }, []);
  return (
    <ScreenWrapper>
      <InnerPage>
        <FolderIconContainer>
          <ScreenIcon id="about-me" imageSource={blackIcon} label="About me">
            <AboutMe />
          </ScreenIcon>
        </FolderIconContainer>
        <FolderIconContainer>
          <ScreenIcon
            id="portfolio"
            imageSource={folderIcon}
            label="Portfolio"
          ></ScreenIcon>
        </FolderIconContainer>
        <FolderIconContainer>
          <ScreenIcon
            id="contact"
            imageSource={EmailIcon}
            label="Contact"
          ></ScreenIcon>
        </FolderIconContainer>
      </InnerPage>

      {windowsList.map((window) => {
        return (
          <AppScreen
            key={window.id}
            id={window.id}
            title={window.title}
            onClose={onCloseWindow}
          >
            {window.content}
          </AppScreen>
        );
      })}

      <Taskbar />
    </ScreenWrapper>
  );
};
