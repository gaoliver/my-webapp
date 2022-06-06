import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'src/styles/theme';
import GlobalStyle from 'src/styles/global';
import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { toggleTheme, useAppSelector } from './redux';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const { theme } = useAppSelector((state) => state);
  const dispatch = useDispatch()
  const getCurrentTime = new Date().getHours();
  const [screenSize, setScreenSize] = useState({
    height: window.screen.height,
    width: window.screen.width
  });
  const aspectRatio = screenSize.height / screenSize.width;

  window.addEventListener('resize', () => {
    setScreenSize({
      height: window.screen.height,
      width: window.screen.width
    });
  });

  const autoTheme = () => {
    if (getCurrentTime < 18 && getCurrentTime > 6) {
      dispatch(toggleTheme())
    } else {
      dispatch(toggleTheme())
    }
  };

  const RenderPlatform = useCallback(() => {
    if (aspectRatio < 1) {
      return <Desktop />;
    }

    return <Mobile onToggleTheme={() => null} />;
  }, [aspectRatio]);

  useEffect(() => {
    autoTheme();
  }, [getCurrentTime]);

  return (
    <ThemeProvider theme={theme}>
      <RenderPlatform />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
