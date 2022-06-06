/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MyInfoModel, PortfolioModel, ToolsModel } from '../interfaces';
import { AppActions } from './actions';

export type WindowListProps = {
  id: string;
  title: string;
  minimized: boolean;
  content: JSX.Element;
};

interface InitialStateModel {
  lastType: string;
  TOOLS: ToolsModel | undefined;
  MYINFO: MyInfoModel | undefined;
  PORTFOLIO: Array<PortfolioModel> | undefined;
  windowsList: WindowListProps[];
}

const initialState: InitialStateModel = {
  lastType: '',
  TOOLS: undefined,
  MYINFO: undefined,
  PORTFOLIO: undefined,
  windowsList: []
};

export const reducer = (
  state: InitialStateModel = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case 'ADD_NEW_WINDOW':
      state.windowsList.push(action.payload);
      return {
        ...state,
        lastType: action.type,
        windowsList: [...state.windowsList]
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
