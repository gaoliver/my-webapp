import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  /* Introduction text justified and centered */
  .intro {
    padding: 0 20%;;
    @media screen and (max-width: 800px) {
      padding: 0 30px;
    }
    h1 {
      color: ${(props) => props.theme.colors.pageH1}
    }
    p:first-of-type {
      width: 100%;
      margin-top: 0;
      padding: 5px 0;
      background-color: ${(props) => props.theme.colors.pageH1};
      color: ${(props) => props.theme.colors.background};
      font-size: 20pt;
      font-weight: 100;
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
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.3rem;
        margin-top: 40px;
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

  /* Home */
  #typping {
    overflow: hidden;
    border-right: 0.15em solid ${(props) => props.theme.colors.text};
    white-space: nowrap;
    margin: 20px auto;
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
      width: 330px;
    }
    90% {
      width: 330px;
    }
    to {
      width: 0;
    }
  }
  @media screen and (max-width: 800px) {
    @keyframes typing {
      from {
        width: 0;
      }
      20% {
        width: 0;
      }
      30% {
        width: 310px;
      }
      90% {
        width: 310px;
      }
      to {
        width: 0;
      }
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
