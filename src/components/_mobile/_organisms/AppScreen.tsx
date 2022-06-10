import React, { FC, HTMLAttributes, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { WindowButton } from 'src/components/_desktop/_atoms';
import { BiChevronLeft } from 'react-icons/bi';
import { useAppSelector, windowOnFocus } from 'src/redux';
import { useDispatch } from 'react-redux';
import { darken, rgba } from 'polished';
import { light } from 'src/styles';
import { fonts } from 'src/constants/fonts';

type WindowProps = {
  onClose: (id: string) => void;
  title: string;
  id: string;
};

const WindowWrapper = styled.article<
  HTMLAttributes<HTMLDivElement> & { isFullSize?: boolean }
>`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) =>
    darken(props.theme === light ? 0.05 : 0, props.theme.window)};
  animation: openApp 0.5s;

  @keyframes openApp {
    0% {
      opacity: 0;
      transform: scale(0) translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .window--content {
    width: 100%;
    height: 90%;
    overflow: scroll;

    section {
      padding-bottom: 100px;
    }

    #contact-page {
      p, button {
        width: 350px
      }
    }
  }
`;

const HeaderWindow = styled.div`
  display: flex;
  width: 100%;
  height: 6%;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.window};
  border-bottom: 1px solid ${(props) => rgba(props.theme.text, 0.1)};
`;

const HeaderTitle = styled.h3`
  flex: 1;
  font-size: 1.1rem;
  opacity: 0.7;
  text-align: center;
  padding: 8px 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  ${fonts.h2}
`;

export const AppScreen: FC<WindowProps> = ({
  children,
  onClose,
  title,
  id
}) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const windowRef = useRef<HTMLDivElement>(null);

  function handleTransition() {
    if (!windowRef.current) return;

    windowRef.current.style.transition = 'ease-in-out 0.3s';

    setTimeout(() => {
      if (!windowRef.current) return;
      return (windowRef.current.style.transition = 'none');
    }, 300);
  }

  function handleCloseWindow() {
    if (!windowRef.current) return;

    handleTransition();

    windowRef.current.style.transform = 'translateX(50%)';
    windowRef.current.style.opacity = '0';

    setTimeout(() => {
      onClose(id);
    }, 200);
  }

  return (
    <WindowWrapper
      id={id}
      ref={windowRef}
      onClick={() => dispatch(windowOnFocus(id))}
    >
      <HeaderWindow>
        <WindowButton onClick={() => dispatch(handleCloseWindow())}>
          <BiChevronLeft size={40} color={theme.text} />
        </WindowButton>
        <HeaderTitle>{title}</HeaderTitle>
        <WindowButton />
      </HeaderWindow>
      <div className="window--content">{children}</div>
    </WindowWrapper>
  );
};
