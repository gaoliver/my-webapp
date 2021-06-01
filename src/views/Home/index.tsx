import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import './index.scss';
// import lightLogo from '../../assets/images/GabrielRamos-logos_transparent.png';
import lightLogo from '../../assets/images/logo-light.svg';
// import darkLogo from '../../assets/images/GabrielRamos-logos_Background.png';
import darkLogo from '../../assets/images/logo-dark.svg';
import { App } from '../../interfaces';
import { Container } from '../../styles/pages';

const Home: React.FC<App> = ({ onSwitch }) => {
  const { colors, title } = useContext(ThemeContext);

  const [logo, setLogo] = useState('');

  useEffect(() => {
    if (title === 'dark') {
      document.getElementById('logo_img')?.classList.add('logo_img_dark');
      setLogo(darkLogo);
    } else {
      document.getElementById('logo_img')?.classList.remove('logo_img_dark');
      setLogo(lightLogo);
    }
  }, [title]);
  return (
      <Container id="home">
        <img
          src={logo}
          className="logo_img"
          id="logo_img"
          style={{ width: 300 }}
          alt="Gabriel Ramos logo"
        />
        <h1 id="typping">Hello world!</h1>
        <Switch
          onChange={onSwitch}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={colors.secondary}
        />
      </Container>
  );
};

export default Home;
