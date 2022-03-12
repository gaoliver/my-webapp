import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useDispatch } from "react-redux"

import './index.scss';
import lightLogo from '../../assets/images/optimized/GabrielRamos-logos_transparent.webp';
import darkLogo from '../../assets/images/optimized/GabrielRamos-logos_Background.webp';
import { App } from '../../interfaces';
import { Container } from '../../styles/pages';
import { getInfo, getTools } from '../../redux';

const Home: React.FC<App> = ({ onSwitch }) => {
  const dispatch = useDispatch()
  const { colors, title } = useContext(ThemeContext);
  const [logo, setLogo] = useState('');

  useEffect(() => {
    dispatch(getTools())
    dispatch(getInfo())

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
      <div className="job-position">
        <h1 id="typping">{MYINFO.position}</h1>
        <h3 className="company">{`@ ${MYINFO.company}`}</h3>
        <h4>{`${MYINFO.city}, ${MYINFO.country}`}</h4>
      </div>
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
