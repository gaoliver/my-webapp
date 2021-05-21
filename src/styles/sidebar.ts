import styled from 'styled-components';

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 25%;
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
    width: 4rem;
    height: 2rem;
    position: absolute;
    z-index: 9999;
    transition: all 1s ease;
    right: -100px;
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
    box-shadow: 0px 0px 1px #000;
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
    box-shadow: 0px 0px 1px #000;

  }

  #menu:checked ~ .menu_responsive > span::after {
    transform: rotate(-50deg);
    top: 45%
  }
  #menu:checked ~ .menu_responsive > span::before {
    transform: rotate(50deg);
    top: 45%
  }

  /* Menu options */
  ul {
    width: 100%;
    text-align: center;
    li {
      padding: 20px 0;
      font-size: 30pt;
      a {
        color: ${(props) => props.theme.colors.text};
        text-decoration: none;
        transition: all 0.2s ease;
        &:hover {
          color: ${(props) => props.theme.colors.secondary};
          text-decoration: underline;
        }
      }
    }
  }
`;
