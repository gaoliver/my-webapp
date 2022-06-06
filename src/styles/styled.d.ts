/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { light } from './theme';

type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
