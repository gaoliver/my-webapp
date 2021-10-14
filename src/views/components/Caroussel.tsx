/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PortfolioImages } from '../../interfaces';

const Caroussel = ({ images }: PortfolioImages) => {
  // get screen width
  const width = window.screen.width;

  // Generate id
  const getId = Math.random();

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        width: width <= 800 ? width - 30 : width / 3,
        height: 300,
        marginTop: width <= 800 ? '10%' : 0
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
                  height: width <= 800 ? 300 : 550
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
