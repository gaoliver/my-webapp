/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { Dispatch } from 'react';
import { MyInfoModel, PortfolioModel, ToolsModel } from '../interfaces';
import { myInfoUrl, portfolioUrl, toolsUrl } from '../service/constants';

export interface SetTools {
  readonly type: 'ON_SET_TOOLS';
  payload: ToolsModel;
}

export interface SetInfo {
  readonly type: 'ON_SET_INFO';
  payload: MyInfoModel;
}

export interface SetPortfolio {
  readonly type: 'ON_SET_PORTFOLIO';
  payload: Array<PortfolioModel>;
}

export type SiteActions = SetTools | SetInfo | SetPortfolio;

export const getTools = () => {
  let data: ToolsModel;
  return async (dispatch: Dispatch<SiteActions>) => {
    await axios.get(toolsUrl).then((res) => {
      data = res.data;
    });
    dispatch({
      type: 'ON_SET_TOOLS',
      payload: data
    });
    console.log('getTools done.');
  };
};

export const getInfo = () => {
  let data: MyInfoModel;
  return async (dispatch: Dispatch<SiteActions>) => {
    await axios.get(myInfoUrl).then((res) => {
      data = res.data;
    });
    dispatch({
      type: 'ON_SET_INFO',
      payload: data
    });
    console.log('getMyInfo done.');
  };
};

export const getPortfolio = () => {
  let data: Array<PortfolioModel>;
  return async (dispatch: Dispatch<SiteActions>) => {
    await axios.get(portfolioUrl).then((res) => {
      data = res.data;
    });
    dispatch({
      type: 'ON_SET_PORTFOLIO',
      payload: data
    });
    console.log('getPortfolio done.');
  };
};
