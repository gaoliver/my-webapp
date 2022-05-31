import { colors } from 'constants/colors';

export const themeColors = {
  primary: colors.primary,
  primaryDark: colors.primaryDark,
  secondary: colors.secondary,
  destruct: colors.red
};

export const light = {
  ...themeColors,
  text: colors.black,
  window: colors.silver,
  selection: colors.primaryDark,
  selectedText: colors.white
};

export const dark = {
  ...themeColors,
  text: colors.white,
  window: colors.black,
  selection: colors.secondary,
  selectedText: colors.black
};
