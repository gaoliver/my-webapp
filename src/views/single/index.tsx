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
  const location = useLocation().pathname.replace('/portfolio/', '');
  const index = PORTFOLIO.findIndex((x) => x?.slug === location);
  const data = PORTFOLIO[index];
  const tela = window.screen.width;
  const [back, setBack] = React.useState(' back');
  const [subtitle, setSubtitle] = React.useState(<></>);
  const [overDate, setOverDate] = React.useState(<></>);
  const getTheme = new URL(
    window.location.href.replace('/#', '')
  ).searchParams.get('theme');

  const translator = {
    name: data.name ? data.name : '',
    company: data.company ? data.company : '',
    url: data.url ? data.url : '#',
    type: data.jobInfo.type ? data.jobInfo.type : '',
    role: data.jobInfo.role ? data.jobInfo.role : '',
    language: data.jobInfo.language ? data.jobInfo.language : '',
    mainTools: data.jobInfo.mainTools ? data.jobInfo.mainTools : '',
    text: data.text ? data.text : '',
    images: data.jobInfo.images ? data.jobInfo.images : [],
    startDate: data.jobInfo.startDate
      ? data.jobInfo.startDate
      : { month: '', year: new Date().getFullYear() },
    endDate: data.jobInfo.endDate
      ? data.jobInfo.endDate
      : { month: 'current', year: new Date().getFullYear() }
  };

  const goToProject = () => {
    return window.open(translator.url);
  };

  function responsivity() {
    if (tela < 800) {
      setBack('');
      setSubtitle(<></>);
      setOverDate(<h3>by {translator.company}</h3>);
    } else {
      setBack(' back');
      setSubtitle(<h3>by {translator.company}</h3>);
      setOverDate(<></>);
    }
  }

  React.useEffect(() => {
    return responsivity();
  }, [tela]);

  React.useEffect(() => {
    if (getTheme === 'light') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [getTheme]);

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
          <div className="page-header">
            <Link className="button-click" to="/#portfolio">
              <IoChevronBackSharp />
              {back}
            </Link>
            <div className="head-info">
              <div className="class-title">
                <h1>{translator.name}</h1>
                {subtitle}
              </div>
              <div className="work-info">
                {overDate}
                <div className="col">
                  <span>
                    {`From ${translator.startDate.month}, ${translator.startDate.year}`}
                  </span>
                  <span>
                    {`${`to ${translator.endDate.month}, ${translator.endDate.year}`}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container single-body">
          <div className="row align-content-center">
            <div className="col-12 col-lg-6 padding">
              <Caroussel images={translator.images} />
            </div>
            <div className="col-12 col-lg-6 padding">
              <p className="project-intro">
                This is a <b>{translator.type}</b> project in which I am the{' '}
                <b>{translator.role}</b>, using <b>{translator.language}</b> as
                the main language.
              </p>
              <p className="text">{translator.text}</p>
              <p className="tools">
                {translator.mainTools.toString().replace(/,/g, ', ')}
              </p>
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
