import React, { FC, HTMLAttributes } from 'react';
import styled, { useTheme } from 'styled-components';
import { Icon } from 'src/components/_shared';
import { TaskbarIcon } from '../_atoms';
import { ClockComponent } from '../_molecules/ClockComponent';
import { rgba } from 'polished';
import {
  addNewWindow,
  minimizeWindow,
  store,
  toggleTaskSettings,
  WindowListProps,
  windowOnFocus
} from 'src/redux';
import { useDispatch } from 'react-redux';
import { BsFillCaretUpFill } from 'react-icons/bs';

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

const WindowsListWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 100%;
  overflow: scroll;
`;

const WindowButton = styled.button<
  HTMLAttributes<HTMLButtonElement> & { isActive: boolean }
>`
  padding: 0 25px;
  flex: 1;
  height: 100%;
  max-width: 25%;
  color: ${(props) => rgba(props.theme.text, props.isActive ? 1 : 0.7)};
  background-color: ${(props) =>
    props.isActive ? props.theme.window : 'transparent'};
  border: none;
  font-size: 1.2rem;
  transition: ease-in-out 0.3s;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  :hover {
    cursor: pointer;
    background-color: ${(props) => rgba(props.theme.window, 0.3)};
  }
`;

export const Taskbar: FC<TaskbarProps> = ({ windowsList, onClickWindow }) => {
  const dispatch = useDispatch();
  const { MYINFO } = store.getState();
  const theme = useTheme();

  const linkedinContent = () => {
    return <>LinkedIn</>;
  };

  const instagramContent = () => {
    return <>Instagram</>;
  };

  function openWindow(id: string, title: string, content: JSX.Element) {
    dispatch(addNewWindow(id, title, content));
  }

  function cleanUpDesktop() {
    const filteredList = windowsList.filter((window) => !window.minimized);

    filteredList.forEach((window) => dispatch(minimizeWindow(window.id)));

    dispatch(windowOnFocus(''));
  }

  const RenderList = () => {
    return (
      <>
        {windowsList.map((item) => (
          <WindowButton
            onClick={() => onClickWindow(item.id)}
            key={item.id}
            isActive={
              store
                .getState()
                .windowsList.find((window) => window.id === item.id)?.minimized
                ? false
                : store.getState().windowOnFocus === item.id
            }
          >
            {item.title}
          </WindowButton>
        ))}
      </>
    );
  };

  return (
    <TaskbarWrapper id="taskbar">
      <TaskbarIcon onClick={cleanUpDesktop}>
        <Icon
          icon="logo-transparent"
          height="35px"
          color={useTheme().text}
          style={{ opacity: 0.9 }}
        />
      </TaskbarIcon>
      <TaskbarIcon
        onClick={() =>
          openWindow(
            'instagram',
            `${MYINFO?.name} - Instagram`,
            instagramContent()
          )
        }
      >
        <Icon icon="instagram" height="30px" />
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
        <Icon icon="linkedin" height="30px" />
      </TaskbarIcon>
      <WindowsListWrapper>
        <RenderList />
      </WindowsListWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          position: 'fixed',
          right: 0
        }}
      >
        <TaskbarIcon onClick={() => dispatch(toggleTaskSettings())}>
          <BsFillCaretUpFill color={rgba(theme.text, 0.5)} />
        </TaskbarIcon>
        <TaskbarIcon>
          <ClockComponent />
        </TaskbarIcon>
      </div>
    </TaskbarWrapper>
  );
};
