import React from 'react';
import { useLocation } from 'react-router-dom';

import dark from '../../styles/dark';
import light from '../../styles/light';
import { Container } from '../../styles/pages';
import { PORTFOLIO } from '../../service/portfolio';
import Caroussel from '../components/Caroussel';
import { BackButton } from '../../components';
import listFormatter from '../../utils/listFormatter';

export const Single: React.FC = () => {
  const [theme, setTheme] = React.useState(light);
  const location = useLocation().pathname.replace('/portfolio/', '');
  const index = PORTFOLIO.findIndex((x) => x?.slug === location);
  const data = PORTFOLIO[index];
  const getTheme = new URL(
    window.location.href.replace('/#', '')
  ).searchParams.get('theme');
  const marginTop = window.screen.width < 600 ? '35vh' : '45vh';

  const translator = {
    name: data.name ? data.name : '',
    company: data.company ? data.company : '',
    url: data.url ? data.url : '#',
    type: data.jobInfo.type ? data.jobInfo.type : '',
    role: data.jobInfo.role ? data.jobInfo.role : '',
    language: data.jobInfo.language ? data.jobInfo.language : '',
    mainTools: data.jobInfo.mainTools ? data.jobInfo.mainTools : [],
    text: data.text ? data.text : '',
    images: data.jobInfo.images ? data.jobInfo.images : [],
    startDate: data.jobInfo.startDate
      ? data.jobInfo.startDate
      : {
        month: '',
        year: new Date().getFullYear()
      },
    endDate: data.jobInfo.endDate
      ? data.jobInfo.endDate
      : {
        month: 'current',
        year: new Date().getFullYear()
      }
  };

  const goToProject = () => {
    return window.open(translator.url);
  };

  const getEndDate = () => {
    if (translator.endDate.month === "current") {
      return `current`
    }
    return `${translator.endDate.month}, ${translator.endDate.year}`
  }

  React.useEffect(() => {
    if (getTheme === 'light') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [getTheme]);

  return (
    <React.StrictMode>
      <BackButton link='/#portfolio' />
      <div
        className="row background-site"
        style={{
          width: '100%',
          marginBottom: '50px',
          position: 'fixed',
          zIndex: -1,
          top: 0,
          marginRight: 0,
          marginLeft: 0
        }}
      >
        <Caroussel images={translator.images} />
      </div>
      <Container
        id="about-me"
        style={{
          height: 'auto',
          overflow: 'visible',
          marginTop: marginTop,
          padding: '30px 0 80px 0'
        }}
      >
        <div className="col intro">
          <h1>{translator.name}</h1>
          <p>by {translator.company}</p>
          <p>{`From ${translator.startDate.month}, ${translator.startDate.year} to ${getEndDate()}.`}</p>
          <p>
            This is a <b>{translator.type}</b> project in which I am the{' '}
            <b>{translator.role}</b>, using <b>{translator.language}</b> as the
            main language.
          </p>
          <p>{translator.text}</p>
          <p className="project-intro">
            {listFormatter(translator.mainTools)}
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
      </Container>
    </React.StrictMode>
  );
};
