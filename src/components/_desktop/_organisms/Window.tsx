import React, { FC, HTMLAttributes, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { WindowButton } from '../_atoms';
import { IoClose, IoExpand, IoRemove } from 'react-icons/io5';
import { colors } from 'constants/colors';
import { rgba } from 'polished';

const WindowWrapper = styled.div<
  HTMLAttributes<HTMLDivElement> & { isFullSize?: boolean }
>`
  position: absolute;
  z-index: 100;
  width: ${(props) => (props.isFullSize ? '100%' : '800px')};
  height: ${(props) => (props.isFullSize ? '94%' : '500px')};
  border-radius: 5px;
  box-shadow: ${(props) => (props.isFullSize ? 'none' : '3px 3px #0008')};
  overflow: hidden;
  resize: both;
  background-color: ${(props) => rgba(props.theme.window, 0.4)};
`;

const HeaderWindow = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.window};
`;

export const Window: FC = ({ children }) => {
  const [position, setPosition] = useState({ x1: 300, y1: 70, x2: 0, y2: 0 });
  const [fullSize, setFullSize] = useState<boolean>(false);
  const theme = useTheme();
  const windowRef = useRef<HTMLDivElement>(null);

  function limiter(pos: number, direction: 'X' | 'Y') {
    const rightLimit =
      window.screen.width - (windowRef.current?.offsetWidth || 0);
    const topLimit = 0;
    const bottomLimit =
      (document.getElementById('taskbar')?.offsetTop || 0) -
      (windowRef.current?.offsetHeight || 0);

    if (!windowRef.current) return 0;

    if (direction === 'X') {
      return Math.min(pos - position.x2, rightLimit);
    }

    if (windowRef.current.offsetTop <= topLimit) {
      return Math.max(pos - position.y2, topLimit);
    }
    return Math.min(pos - position.y2, bottomLimit);
  }

  function handleDragElement(e: React.DragEvent<HTMLDivElement>) {
    e = e || window.event;
    e.preventDefault();

    setPosition((pos) => ({ ...pos, y2: e.clientY, x2: e.clientX }));

    document.addEventListener('mouseup', closeDragging);
    document.addEventListener('mousemove', handleDragging);
  }

  function handleDragging(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();

    setPosition((pos) => ({
      ...pos,
      x1: limiter(e.clientX, 'X'),
      y1: limiter(e.clientY, 'Y')
    }));
  }

  function closeDragging() {
    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', closeDragging);
    setPosition((pos) => ({ ...pos, x2: 0, y2: 0 }));
  }

  function onResize() {
    if (!windowRef.current) return;

    windowRef.current.style.transition = 'ease-in-out 0.3s';

    setPosition((pos) => ({ ...pos, x1: 0, y1: 0 }));
    setFullSize((props) => !props);

    setTimeout(() => {
      if (!windowRef.current) return;
      windowRef.current.style.transition = 'none';
    }, 300);
  }

  return (
    <WindowWrapper
      ref={windowRef}
      isFullSize={fullSize}
      style={{ top: position.y1, left: position.x1 }}
    >
      <HeaderWindow onMouseDown={handleDragElement}>
        <WindowButton>
          <IoRemove size={20} color={theme.text} />
        </WindowButton>
        <WindowButton onClick={onResize}>
          <IoExpand size={17} color={theme.text} />
        </WindowButton>
        <WindowButton buttonColor={colors.red}>
          <IoClose size={20} color={theme.text} />
        </WindowButton>
      </HeaderWindow>
      {children}
    </WindowWrapper>
  );
};
