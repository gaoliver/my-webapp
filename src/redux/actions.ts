/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import { Dispatch } from 'react';
import { MyInfoModel, ToolsModel } from '../interfaces';
import { toolsUrl } from '../service/constants';

export interface SetTools {
  readonly type: 'ON_SET_TOOLS';
  payload: ToolsModel;
}

export interface SetInfo {
  readonly type: 'ON_SET_INFO';
  payload: MyInfoModel;
}

export type SiteActions = SetTools | SetInfo;

export const getTools = () => {
  let data: ToolsModel;
  return async (dispatch: Dispatch<SiteActions>) => {
    await axios.get(toolsUrl).then((res) => {
      data = res.data;
    });
    console.log('GET TOOLS!!!!');
    dispatch({
      type: 'ON_SET_TOOLS',
      payload: data
    });
  };
};

export const getInfo = () => {
  let data: MyInfoModel;
  return async (dispatch: Dispatch<SiteActions>) => {
    await axios.get(toolsUrl).then((res) => {
      data = res.data;
    });
    console.log('GET TOOLS!!!!');
    dispatch({
      type: 'ON_SET_INFO',
      payload: data
    });
  };
};
