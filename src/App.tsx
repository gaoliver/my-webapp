import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/dark';
import light from './styles/light';
import Home from './components/Home';
import usePersistedState from './utils/usePersistedState';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  // Change theme by pressing button
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  // Auto change theme by hour
  const getCurrentTime = new Date().getHours();

  const autoTheme = () => {
    if ((getCurrentTime < 18) && (getCurrentTime > 6)) {
      setTheme(light)
    } else {
      setTheme(dark);
    }
  }

  React.useEffect(() => {
    autoTheme()
  }, [getCurrentTime])

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <div className="viewContainer">
        <Home onSwitch={toggleTheme} />
        <About />
        <Portfolio />
        <Contact />
        <NotFound />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
