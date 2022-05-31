import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';

const WindowWrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 800px;
  height: 500px;
  background-color: ${(props) => props.theme.window};
  border-radius: 5px;
  box-shadow: 3px 3px #0008;
`;

export const Window: FC = ({ children }) => {
  const [position, setPosition] = useState({ x1: 300, y1: 70, x2: 0, y2: 0 });

  const windowRef = useRef<HTMLDivElement>(null);

  function limiter(pos: number, direction: 'X' | 'Y') {
    const rightLimit =
      window.screen.width - (windowRef.current?.offsetWidth || 0);
    // const leftLimit = 0;
    const topLimit = 0;
    const bottomLimit =
      (document.getElementById('taskbar')?.offsetTop || 0) -
      (windowRef.current?.offsetHeight || 0);

    if (!windowRef.current) return 0;

    if (direction === 'X') {
      return Math.min(pos - position.x2, rightLimit);
    }

    if (windowRef.current.offsetTop <= topLimit) {
      return Math.max(pos - position.y2, topLimit)
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

  return (
    <WindowWrapper
      ref={windowRef}
      onMouseDown={handleDragElement}
      style={{ top: position.y1, left: position.x1 }}
    >
      {children}
    </WindowWrapper>
  );
};
