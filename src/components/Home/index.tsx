import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import './index.scss';
import logo from '../../assets/images/GabrielRamos-logos_transparent.png';
import { App } from '../../interfaces';
import { Container } from '../../styles/pages';

const Home: React.FC<App> = ({ onSwitch }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container id="home">
      <img src={logo} style={{ width: 300 }} alt="Gabriel Ramos logo" />
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
