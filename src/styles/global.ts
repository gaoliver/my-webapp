import { createGlobalStyle } from 'styled-components';
// import phoneImg from '../assets/images/IMG_7173.jpg';
import phoneImg from '../assets/images/mobile-bg.svg';
// import desktopImg from '../assets/images/IMG_7257.jpg';
import desktopImg from '../assets/images/desktop-bg.svg';
import { opacify } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    width: 100%;
    height: 100vh;
    background-image: url(${desktopImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${(props) => props.theme.colors.text};
    font: 400 16pt Titillium, sans-serif;
    transition: all 0.5s ease;
    @media screen and (max-width: 800px) {
      background-image: url(${phoneImg});
    }
  }
  #error-404, #home {
    background: ${(props) =>
      opacify(-0.3, props.theme.colors.background)} !important;
  }

  #about-me, #portfolio, #contact {
    background: ${(props) => props.theme.colors.background} !important;
    box-shadow: 0px 0px 40px 40px ${(props) => props.theme.colors.background};
  }

  #about-me {
    justify-content: flex-start;
    padding: 25% 0;
  }

  #portfolio {
    @media (max-width: 800px) {
      justify-content: flex-start;
      padding: 20% 0;
    }
  }

  #about-me, #portfolio {
    overflow: scroll;
  }

  .viewContainer {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .site-footer {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: linear-gradient(to top, ${(props) => props.theme.colors.background + "df"} 50%, transparent 100%);
    p {
        font-size: 1rem;
        opacity: 0.5;
        margin-bottom: 0;
        padding-top: 10px;
        font-weight: bold;
    }
    @media (max-width: 800px) {
        justify-content: center;
    }
}
`;
