import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IoChevronBackSharp } from 'react-icons/all';
import { useLocation, Link } from 'react-router-dom';

import GlobalStyle from '../../styles/global';
import dark from '../../styles/dark';
import light from '../../styles/light';
import { Container } from '../../styles/pages';
import { PORTFOLIO } from '../../service/portfolio';
import Caroussel from '../components/Caroussel';

export const Single: React.FC = () => {
  const [theme, setTheme] = React.useState(light);

  // Auto change theme by hour
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

  // Get the content
  const location = useLocation().pathname.replace('/portfolio/', '');

  const index = PORTFOLIO.findIndex((x) => x.slug === location);
  const data = PORTFOLIO[index];

  // Go to Project website
  const goToProject = () => {
    return window.open(data.url);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ backgroundColor: theme.colors.background, height: "auto", minHeight: "100vh" }}>
        <div className="header">
          {/* Header */}
          <div className="page-header">
            {/* Back button */}
            <Link className="button-click" to="/#portfolio" >
              <IoChevronBackSharp /> back
            </Link>
          </div>
        </div>
        {/* The content body */}
        <div className="container single-body">
          <div className="row align-content-center">
            {/* Image caroussel */}
            <div className="col-12 col-lg-6 padding">
              <Caroussel images={data.jobInfo.images} />
            </div>
            {/* Project info */}
            <div className="col-12 col-lg-6 padding">
              {/* Project infor head */}
              <div className="head-info">
                {/* Project name */}
                <h1>{data.name}</h1>
                <div className="row">
                  {/* Company name */}
                  <h3 className="col">by {data.company}</h3>
                  <div className="col">
                    {/* Start date */}
                    <span>
                      {`From ${data.jobInfo.startDate.month}, ${data.jobInfo.startDate.year}`}
                    </span>
                    {/* End date or current */}
                    <span>
                      {`${
                        data.jobInfo.endDate.month !== ''
                          ? `to ${data.jobInfo.endDate.month}, ${data.jobInfo.endDate.year}`
                          : 'in course'
                      }`}
                    </span>
                  </div>
                </div>
                {/* About the role */}
                <p>
                  This is a <b>{data.jobInfo.type}</b> project in which I am the{' '}
                  <b>{data.jobInfo.role}</b>, using{' '}
                  <b>{data.jobInfo.language}</b> as the main language.
                </p>
              </div>
              {/* About the whole project */}
              <p className="text">{data.text}</p>
              {/* Tools and languages used */}
              <p className="tools">
                {data.jobInfo.mainTools.toString().replace(/,/g, ', ')}
              </p>
              {/* Button to more info */}
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={goToProject}
                >
                  Go to the Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};
