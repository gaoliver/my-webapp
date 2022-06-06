import { ReactComponent as Logo } from 'src/assets/svg/gabrielramos-logo.svg';
import { ReactComponent as LogoWithBackground } from 'src/assets/svg/gabrielramos-logowithbackground.svg';
import { ReactComponent as Instagram } from 'src/assets/svg/instagram.svg';
import { ReactComponent as LinkedIn } from 'src/assets/svg/linkedin.svg';

export const icons = {
  logo: Logo,
  'logo-with-background': LogoWithBackground,
  instagram: Instagram,
  linkedin: LinkedIn
};

export type IconOption = keyof typeof icons;
