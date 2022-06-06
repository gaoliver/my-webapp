import { buttonInteraction } from 'src/constants/buttonInteraction';
import { colors } from 'src/constants/colors';
import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

type WindowButtonProps = {
  onClick?: () => void;
  buttonColor?: string;
};

const WindowButtonWrapper = styled.button<
  HTMLAttributes<HTMLButtonElement> & {
    buttonColor?: string;
  }
>`
  display: flex;
  border: 0 none;
  height: 100%;
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  opacity: 0.7;
  :hover {
    background-color: ${(props) => props.buttonColor || props.theme.window};
    ${(props) =>
      props.buttonColor &&
      `
    path {
      color: ${colors.white}
    }
    `}
  }
  ${buttonInteraction}
`;

export const WindowButton: FC<WindowButtonProps> = ({
  buttonColor,
  onClick,
  children
}) => {
  return (
    <WindowButtonWrapper onClick={onClick} buttonColor={buttonColor}>
      {children}
    </WindowButtonWrapper>
  );
};
