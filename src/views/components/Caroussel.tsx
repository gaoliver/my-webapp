/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PortfolioImages } from '../../interfaces';

const Caroussel = ({ images }: PortfolioImages) => {
  const width = window.screen.width;
  const getId = Math.random();

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: width,
        overflow: "hidden"
      }}
    >
      <div className="slide-container">
        <Slide>
          {images.map((x) => (
            <div className="each-slide" key={getId}>
              <div
                style={{
                  backgroundImage: `url(${x})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: width < 800 ? 300 : 400
                }}
              >
                <span></span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Caroussel;
