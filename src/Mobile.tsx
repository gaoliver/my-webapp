import { rgba } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';
import { ScreenIcon, Taskbar } from './components/_mobile';

import blackIcon from 'src/assets/images/GabrielRamos-blackIcon.png';
import folderIcon from 'src/assets/images/folder.png';
import EmailIcon from 'src/assets/images/email.png';

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
  return (
    <ScreenWrapper>
      <InnerPage>
        <FolderIconContainer>
          <ScreenIcon
            id="about-me"
            imageSource={blackIcon}
            label="About me"
          ></ScreenIcon>
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
      <Taskbar />
    </ScreenWrapper>
  );
};
