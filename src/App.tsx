import React from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'styles/theme';
import GlobalStyle from 'styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const getCurrentTime = new Date().getHours();

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  const autoTheme = () => {
    if (getCurrentTime < 18 && getCurrentTime > 6) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  React.useEffect(() => {
    autoTheme();
  }, [getCurrentTime]);

  return (
    <ThemeProvider theme={theme}>
      <h1>Gabriel Ramos</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
