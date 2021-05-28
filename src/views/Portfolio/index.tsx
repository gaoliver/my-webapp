import { shade } from 'polished';
import React from 'react';
import { PORTFOLIO } from '../../service/portfolio';
import { Container } from '../../styles/pages';
import './index.scss';

const Portfolio: React.FC = () => {
  return (
    <Container id="portfolio">
      <div className="container">
        <div className="row justify-content-around">
          {PORTFOLIO.map((x) => (
            <a
              href={'#portfolio/' + x.slug}
              className="col-10 col-lg-5 icon"
              key={x.id}
              style={{ backgroundColor: shade(0.7, x.color) }}
            >
              {/* Background image */}
              <div
                className="background-icon"
                style={{ backgroundImage: `url(${x.mainImage})` }}
              ></div>
              {/* Content */}
              <div className="content">
                {/* <img src={x.mainImage} width="100" alt={x.name + 'logo'} /> */}
                <div
                  className="logo-img"
                  style={{ backgroundImage: `url(${x.mainImage})` }}
                />
                <h1>{x.name.substring(0, 16)}{x.name.length > 16 ? "..." : null}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
