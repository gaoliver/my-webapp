import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

// Views
import About from './views/About';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { Single } from './views/single';

// Components
import { PORTFOLIO } from './service/portfolio';
import dark from './styles/dark';
import light from './styles/light';
import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
// import usePersistedState from './utils/usePersistedState';ƒ

const App: React.FC = () => {
  // Change theme by pressing button
  // const [theme, setTheme] = usePersistedState('theme', light);
  const [theme, setTheme] = React.useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  // Auto change theme by hour
  const getCurrentTime = new Date().getHours();

  const autoTheme = () => {
    if (getCurrentTime < 18 && getCurrentTime > 6) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  // Run on startup
  React.useEffect(() => {
    autoTheme();
  }, [getCurrentTime]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* Pages routes */}
        <Switch>
          <Redirect exact from="/" to="/my-webapp" />
          <Route exact path="/my-webapp">
            <Sidebar />
            {/* Home */}
            <div className="viewContainer">
              <Home onSwitch={toggleTheme} />
              <About />
              <Portfolio />
              <Contact />
              <NotFound />
            </div>
          </Route>
          {/* Single page */}
          <Route path={`/my-webapp/portfolio/:slug`} component={Single} />
          {/* Error 404 */}
          <Redirect to="/my-webapp#error-404" />
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
