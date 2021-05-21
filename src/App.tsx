import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/dark';
import light from './styles/light';
import Home from './components/Home';
import usePersistedState from './utils/usePersistedState';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <Home onSwitch={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
