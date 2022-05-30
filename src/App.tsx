import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/theme';
import GlobalStyle from 'styles/global';
import { Desktop } from 'Desktop';
import { Mobile } from 'Mobile';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
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

  const handleToggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const autoTheme = () => {
    if (getCurrentTime < 18 && getCurrentTime > 6) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  const RenderPlatform = useCallback(() => {
    if (aspectRatio < 1) {
      return <Desktop onToggleTheme={handleToggleTheme} />;
    }

    return <Mobile onToggleTheme={handleToggleTheme} />;
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
