import { ReactComponent as Logo } from 'assets/svg/gabrielramos-logo.svg';
import { ReactComponent as LogoWithBackground } from 'assets/svg/gabrielramos-logowithbackground.svg';

// import Logo from 'assets/svg/gabrielramos-logo.svg';
// import LogoWithBackground from 'assets/svg/gabrielramos-logowithbackground.svg';

export const icons = {
  logo: Logo,
  'logo-with-background': LogoWithBackground
};

export type IconOption = keyof typeof icons;
