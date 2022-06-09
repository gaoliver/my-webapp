/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactNode } from 'react';
import { light } from 'src/styles';
import { Theme } from 'src/styles/styled';
import { MyInfoModel, PortfolioModel, ToolsModel } from '../interfaces';
import { AppActions } from './actions';

export type WindowListProps = {
  id: string;
  title: string;
  minimized: boolean;
  content: ReactNode;
};

interface InitialStateModel {
  lastType: string;
  TOOLS: ToolsModel | undefined;
  MYINFO: MyInfoModel | undefined;
  PORTFOLIO: Array<PortfolioModel> | undefined;
  windowsList: WindowListProps[];
  taskSettings: boolean;
  theme: Theme;
  windowOnFocus?: string;
}

const initialState: InitialStateModel = {
  lastType: '',
  TOOLS: undefined,
  MYINFO: undefined,
  PORTFOLIO: undefined,
  windowsList: [],
  taskSettings: false,
  theme: light,
  windowOnFocus: undefined
};

export const reducer = (
  state: InitialStateModel = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case 'ADD_NEW_WINDOW':
      if (
        !state.windowsList.find((window) => window.id === action.payload.id)
      ) {
        state.windowsList.push(action.payload);
      }
      return {
        ...state,
        lastType: action.type,
        windowsList: [...state.windowsList]
      };
    case 'WINDOW_ON_FOCUS':
      return {
        ...state,
        windowOnFocus: action.payload
      };
    case 'MINIMIZE_WINDOW':
      return {
        ...state,
        lastType: action.type,
        windowsList: action.payload
      };
    case 'CLOSE_WINDOW':
      return {
        ...state,
        lastType: action.type,
        windowsList: action.payload
      };
    case 'TOGGLE_TASK_SETTINGS':
      return {
        ...state,
        lastType: action.type,
        taskSettings: !state.taskSettings
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        lastType: action.type,
        theme: action.payload
      };
    case 'ON_SET_TOOLS':
      return {
        ...state,
        lastType: action.type,
        TOOLS: action.payload
      };
    case 'ON_SET_INFO':
      return {
        ...state,
        lastType: action.type,
        MYINFO: action.payload
      };
    case 'ON_SET_PORTFOLIO':
      return {
        ...state,
        lastType: action.type,
        PORTFOLIO: action.payload
      };
    default:
      return state;
  }
};
