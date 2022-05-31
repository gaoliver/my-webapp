import { ReactComponent as Logo } from 'assets/svg/gabrielramos-logo.svg';
import { ReactComponent as LogoWithBackground } from 'assets/svg/gabrielramos-logowithbackground.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as LinkedIn } from 'assets/svg/linkedin.svg';

export const icons = {
  logo: Logo,
  'logo-with-background': LogoWithBackground,
  instagram: Instagram,
  linkedin: LinkedIn
};

export type IconOption = keyof typeof icons;
