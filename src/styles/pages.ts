import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
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
  .header {
    width: 100%;
    height: 130px;
    position: relative;
    .page-header {
      width: 100%;
      height: 130px;
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.primary};
      ${(props) =>
        props.theme.title === 'dark'
          ? 'animation: flicker-sidebar 1.5s infinite alternate'
          : 'box-shadow: 0px 0px 1px #000 !important;'};

      .button-click {
        cursor: pointer;
        width: fit-content;
        color: white;
        text-decoration: none;
      }
      .head-info {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-left: 1px solid white;
        padding-left: 3%;
        color: white;
        .class-title {
          display: flex;
          flex-direction: column;
        }
        h3 {
          font-size: 1.2rem;
        }
        div > div > span {
          float: right;
          clear: right;
          font-size: 1rem;
          font-weight: 200;
        }
        @media (max-width: 800px) {
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          text-align: left;
          .work-info {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          h1 {
            font-size: 1.8rem;
          }
          h3 {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 0;
            width: 60%;
          }
          div > div > span {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
      }
    }
  }
  .single-body {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .padding {
    padding: 20px;
    .project-intro {
      width: 100%;
      text-align: justify;
      margin-top: 20px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: black;
      padding: 10px;
    }
    .text {
      text-align: justify;
      line-height: 30px;
      margin: 30px 0;
    }
    .tools {
      font-size: 1.3rem;
      font-weight: 300;
      text-align: justify;
      width: 100%;
      padding: 10px;
      color: black;
      background-color: ${(props) => props.theme.colors.secondary};
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
    align-items: center
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
  .company {
    margin: 10px auto 40px auto;
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
