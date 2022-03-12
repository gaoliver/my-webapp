/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MyInfoModel, PortfolioModel, ToolsModel } from '../interfaces';
import { SiteActions } from './actions';

interface InitialStateModel {
  TOOLS: ToolsModel | undefined;
  MYINFO: MyInfoModel | undefined;
  PORTFOLIO: Array<PortfolioModel> | undefined;
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
    case 'ON_SET_PORTFOLIO':
      return {
        ...state,
        PORTFOLIO: action.payload
      };
    default:
      return state;
  }
};
