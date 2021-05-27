import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 20%;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  z-index: 10000;
  transform: translateX(-100%);
  transition: all 1s ease;

  /* Toggle Menu */
  .menu_responsive {
    width: 3rem;
    height: 2rem;
    position: absolute;
    z-index: 9999;
    transition: all 1s ease;
    right: -70px;
    top: 20px;
  }

  .menu_responsive:hover {
    cursor: pointer;
  }

  .menu_responsive span::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 0.6rem;
    border-radius: 2px;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.primary};
    ${(props) =>
      props.theme.title === 'dark'
        ? 'animation: flicker-sidebar 1.5s infinite alternate'
        : 'box-shadow: 0px 0px 1px #000 !important;'}
  }

  .menu_responsive > span::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.6rem;
    border-radius: 2px;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.colors.primary};
    ${(props) =>
      props.theme.title === 'dark'
        ? 'animation: flicker-sidebar 1.5s infinite alternate'
        : 'box-shadow: 0px 0px 1px #000 !important;'}
  }

  #menu:checked ~ .menu_responsive > span::after {
    transform: rotate(-50deg);
    top: 45%;
  }
  #menu:checked ~ .menu_responsive > span::before {
    transform: rotate(50deg);
    top: 45%;
  }

  /* Menu options */
  ul {
    width: 100%;
    padding-left: 10%;
    li {
      width: 100%;
      padding: 20px 0;
      font-size: 30pt;
      list-style: none;
      a {
        color: #e1e1e9;
        text-decoration: none;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        &:hover {
          color: #e1e1e9;
          text-shadow: 0 0 10px ${(props) => props.theme.colors.secondary},
            0 0 20px ${(props) => props.theme.colors.secondary},
            0 0 50px ${(props) => props.theme.colors.secondary},
            0 0 80px ${(props) => props.theme.colors.secondary},
            0 0 100px ${(props) => props.theme.colors.secondary};
          animation: flicker 1.5s infinite alternate;
        }
        @keyframes flicker {
          0%,
          100% {
            text-shadow: 0 0 10px ${(props) => props.theme.colors.secondary},
              0 0 20px ${(props) => props.theme.colors.secondary},
              0 0 50px ${(props) => props.theme.colors.secondary},
              0 0 80px ${(props) => props.theme.colors.secondary},
              0 0 100px ${(props) => props.theme.colors.secondary};
          }
          0% {
            text-shadow: 0 0 2px ${(props) => props.theme.colors.secondary},
              0 0 5px ${(props) => props.theme.colors.secondary},
              0 0 10px ${(props) => props.theme.colors.secondary},
              0 0 80px ${(props) => props.theme.colors.secondary};
          }
        }
        @keyframes flicker-sidebar {
          0%,
          100% {
            box-shadow: 0 0 2px ${(props) => props.theme.colors.secondary},
              0 0 5px ${(props) => props.theme.colors.secondary},
              0 0 10px ${(props) => props.theme.colors.secondary},
              0 0 20px ${(props) => props.theme.colors.secondary},
              0 0 30px ${(props) => props.theme.colors.secondary};
          }
          0% {
            box-shadow: 0 0 2px ${(props) => props.theme.colors.secondary},
              0 0 1px ${(props) => props.theme.colors.secondary},
              0 0 2px ${(props) => props.theme.colors.secondary},
              0 0 10px ${(props) => props.theme.colors.secondary};
          }
        }
      }
    }
  }
`;
