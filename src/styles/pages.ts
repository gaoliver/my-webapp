import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.7rem;
    font-weight: bold;
    @media (max-width: 800px) {
      font-size: 2.5rem;
    }
  }

  /* Introduction text justified and centered */
  .intro {
    padding: 0 20%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      padding: 0 30px;
    }
    h1 {
      color: ${(props) => props.theme.colors.pageH1};
      font-size: 3rem;
      font-weight: bolder;
    }
    p:first-of-type {
      width: 100%;
      margin-top: 0;
      padding: 5px 0;
      background-color: ${(props) => props.theme.colors.pageH1};
      color: ${(props) => props.theme.colors.background};
      font-size: 20pt;
      font-weight: 100;
      @media (max-width: 800px) {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    p {
      text-align: justify;
      margin-top: 20px;
      line-height: 30px;
    }
    .profile {
      margin: 40px 10%;
      padding: 20px;
      border: 3px dotted ${(props) => props.theme.colors.pageH1};
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 800px) {
        margin: 40px 0 !important;
      }
      h1 {
        font-size: 2rem;
        text-align: center;
      }
      h2 {
        font-size: 1.3rem;
        margin-top: 40px;
        text-align: center;
      }
      p {
        font-weight: 400;
        background: none;
        color: ${(props) => props.theme.colors.text};
        font-size: 1rem;
        width: fit-content;
        text-align: center;
        line-height: 20px;
        margin-top: 10px;
        b {
          margin-top: 20px;
        }
        li {
          font-size: 1rem;
          list-style: none;
        }
      }
    }
  }

  /* Single page */
  .single-body {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project-intro {
    width: 100%;
    text-align: justify;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: black;
    padding: 10px;
  }
  }

  /* Animation */
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

  /* Home */
  .job-position {
    position: relative;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 10px auto 0 auto;
    }
    h4 {
      font-size: 14pt;
      margin: 10px auto 40px auto;
    }
  }
  #typping {
    overflow: hidden;
    font-size: larger;
    border-right: 0.15em solid ${(props) => props.theme.colors.text};
    white-space: nowrap;
    margin: 40px 0 10px 0;
    letter-spacing: 0.15em;
    animation: typing 10s steps(20, end) infinite,
      blink-caret 0.75s step-end infinite;
  }
  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    20% {
      width: 0;
    }
    30% {
      width: 100%;
    }
    90% {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${(props) => props.theme.colors.text};
    }
  }
`;
