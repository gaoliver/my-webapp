import React, { FC, HTMLAttributes } from 'react';
import styled, { useTheme } from 'styled-components';
import { Icon } from 'src/components/_shared';
import { TaskbarIcon } from '../_atoms';
import { ClockComponent } from '../_molecules/ClockComponent';
import { rgba } from 'polished';
import { addNewWindow, store, WindowListProps } from 'src/redux';
import { useDispatch } from 'react-redux';

type TaskbarProps = {
  windowsList: WindowListProps[];
  onClickWindow: (id: string) => void;
};

const TaskbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${(props) => rgba(props.theme.window, 0.7)};
  backdrop-filter: blur(10px);
`;

const WindowButton = styled.button<
  HTMLAttributes<HTMLButtonElement> & { isActive: boolean }
>`
  padding: 0 10px;
  height: 100%;
  background-color: ${(props) =>
    props.isActive ? props.theme.window : 'transparent'};
  border: none;
  font-size: 1.2rem;
  transition: ease-in-out 0.3s;
  :hover {
    cursor: pointer;
    background-color: ${props => rgba(props.theme.window, 0.3)}
  }
`;

export const Taskbar: FC<TaskbarProps> = ({ windowsList, onClickWindow }) => {
  const dispatch = useDispatch();
  const { MYINFO } = store.getState();

  const linkedinContent = () => {
    return <>LinkedIn</>;
  };

  function openWindow(id: string, title: string, content: JSX.Element) {
    dispatch(addNewWindow(id, title, content));
  }
  const RenderList = () => {
    return (
      <>
        {windowsList.map((item) => (
          <WindowButton
            onClick={() => onClickWindow(item.id)}
            key={item.id}
            isActive={
              !store.getState().windowsList.find((x) => x.id === item.id)
                ?.minimized || false
            }
          >
            {item.id}
          </WindowButton>
        ))}
      </>
    );
  };

  return (
    <TaskbarWrapper id="taskbar">
      <TaskbarIcon>
        <Icon icon="logo" height="40px" color={useTheme().text} />
      </TaskbarIcon>
      <TaskbarIcon style={{ position: 'fixed', right: 0 }}>
        <ClockComponent />
      </TaskbarIcon>
      <TaskbarIcon>
        <Icon icon="instagram" />
      </TaskbarIcon>
      <TaskbarIcon
        onClick={() =>
          openWindow(
            'linkedin',
            `${MYINFO?.name} - LinkedIn`,
            linkedinContent()
          )
        }
      >
        <Icon icon="linkedin" />
      </TaskbarIcon>
      <RenderList />
    </TaskbarWrapper>
  );
};
