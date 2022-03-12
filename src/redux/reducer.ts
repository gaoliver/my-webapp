/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ToolsModel } from '../interfaces';
import { SiteActions } from './actions';

interface InitialStateModel {
  TOOLS: ToolsModel | undefined;
  MYINFO: undefined;
  PORTFOLIO: undefined;
}

const initialState: InitialStateModel = {
  TOOLS: undefined,
  MYINFO: undefined,
  PORTFOLIO: undefined
};

export const reducer = (
  state: InitialStateModel = initialState,
  action: SiteActions
) => {
  switch (action.type) {
    case 'ON_SET_TOOLS':
      return {
        ...state,
        TOOLS: action.payload
      };
    case 'ON_SET_INFO':
      return {
        ...state,
        MYINFO: action.payload
      };
    default:
      return state;
  }
};
