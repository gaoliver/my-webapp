import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';

// Views
import About from './views/About';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { Single } from './views/single';

// Components
import dark from './styles/dark';
import light from './styles/light';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const getCurrentTime = new Date().getHours();

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
      <Footer />
      {/* Pages routes */}
      <Switch>
        <Route exact path="/">
          <Sidebar />
          {/* Home */}
          <div className="viewContainer">
            <Home onSwitch={toggleTheme} />
            <About />
            <Portfolio currentTheme={theme.title} />
            <Contact />
            <NotFound />
          </div>
        </Route>
        {/* Single page */}
        <Route path={`/portfolio/:slug`}>
          <div
            style={{ display: 'block', height: '100vh', overflow: 'scroll' }}
          >
            <Single />
          </div>
        </Route>
        {/* Error 404 */}
        <Redirect to="#error-404" />
      </Switch>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
