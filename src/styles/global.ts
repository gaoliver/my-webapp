import { createGlobalStyle } from 'styled-components';
import phoneImg from 'assets/images/optimized/mobile_background.webp';
import desktopImg from 'assets/images/optimized/desktop_background.webp';

export default createGlobalStyle`
  :root {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    width: 100%;
    height: 100vh;
    /* background-image: url(${desktopImg}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${(props) => props.theme.text};
    transition: all 0.5s ease;
    @media screen and (max-width: 800px) {
      /* background-image: url(${phoneImg}); */
    }
  }

  ::selection {
    background-color: ${(props) => props.theme.selection};
    color: ${(props) => props.theme.selectedText}
  }
`;
