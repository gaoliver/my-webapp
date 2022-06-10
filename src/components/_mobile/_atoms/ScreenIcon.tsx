import React, { FC } from 'react';
import styled from 'styled-components';

import { colors } from 'src/constants/colors';
import { fonts } from 'src/constants/fonts';

export type ScreenIconProps = {
  imageSource: string;
  label: string;
  id: string;
};

const ScreenIconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  width: 85px;
  height: 120px;
  margin: 5px;
  border: none;
  background-color: transparent;
  user-select: none;
  overflow: hidden;
`;

const ScreenIconImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 10px;
  object-fit: contain;
`;

const LabelStyled = styled.span`
  width: 100%;
  flex: 1;
  margin-top: 5px;
  color: ${colors.white};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  ${fonts.label}
`;

export const ScreenIcon: FC<ScreenIconProps> = ({
  id,
  imageSource,
  label,
  children
}) => {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  return (
    <ScreenIconWrapper>
      <ScreenIconImage src={imageSource} />
      <LabelStyled>{label}</LabelStyled>
    </ScreenIconWrapper>
  );
};
