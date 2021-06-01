import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IoChevronBackSharp } from 'react-icons/all';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import GlobalStyle from '../../styles/global';
import dark from '../../styles/dark';
import light from '../../styles/light';
import { Container } from '../../styles/pages';
import { PORTFOLIO } from '../../service/portfolio';
import Caroussel from '../components/Caroussel';

export const Single: React.FC = () => {
  const [theme, setTheme] = React.useState(light);

  // Get the theme
  const getTheme = new URL(
    window.location.href.replace('/#', '')
  ).searchParams.get('theme');

  React.useEffect(() => {
    if (getTheme === 'light') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [getTheme]);

  // Get the content
  const location = useLocation().pathname.replace('/portfolio/', '');

  const index = PORTFOLIO.findIndex((x) => x.slug === location);
  const data = PORTFOLIO[index];

  // Go to Project website
  const goToProject = () => {
    return window.open(data.url);
  };

  // Responsivity
  const tela = window.screen.width;
  const [back, setBack] = React.useState(' back');
  const [subtitle, setSubtitle] = React.useState(<></>);
  const [overDate, setOverDate] = React.useState(<></>);

  function responsivity() {
    if (tela < 800) {
      setBack('');
      setSubtitle(<></>);
      setOverDate(<h3>by {data.company}</h3>);
    } else {
      setBack(' back');
      setSubtitle(<h3>by {data.company}</h3>);
      setOverDate(<></>);
    }
  }

  React.useEffect(() => {
    return responsivity();
  }, [tela]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          backgroundColor: theme.colors.background,
          height: 'auto',
          minHeight: '100vh',
          paddingBottom: 100
        }}
      >
        <div className="header">
          {/* Header */}
          <div className="page-header">
            {/* Back button */}
            <Link className="button-click" to="/#portfolio">
              <IoChevronBackSharp />
              {back}
            </Link>

            {/* Project infor head */}
            <div className="head-info">
              {/* Project name */}
              <div className="class-title">
                <h1>{data.name}</h1>
                {subtitle}
              </div>
              {/* Company name */}
              <div className="work-info">
                {overDate}
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
            </div>
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
              {/* About the role */}
              <p className="project-intro">
                This is a <b>{data.jobInfo.type}</b> project in which I am the{' '}
                <b>{data.jobInfo.role}</b>, using <b>{data.jobInfo.language}</b>{' '}
                as the main language.
              </p>
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
