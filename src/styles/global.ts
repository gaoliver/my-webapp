import { createGlobalStyle } from 'styled-components';
import phoneImg from '../assets/images/optimized/mobile_background.webp';
import desktopImg from '../assets/images/optimized/desktop_background.webp';
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

  .background-site {
    background: ${(props) => props.theme.colors.background};
  }

  #error-404, #home {
    background: ${(props) =>
      opacify(-0.3, props.theme.colors.background)} !important;
  }

  #about-me, #portfolio, #contact {
    background: ${(props) => props.theme.colors.background};
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
    background-color: ${(props) => props.theme.colors.background + 'df'};
    gap: 8px;
    p {
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 0;
        padding-top: 5px;
        font-weight: bold;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.link};
    }
    @media (max-width: 800px) {
        justify-content: center;
        flex-wrap: wrap;
    }
}
`;
