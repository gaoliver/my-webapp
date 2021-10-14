import React from 'react';
import { Container } from '../../styles/pages';
import PDFCV from '../../assets/Gabriel_Ramos_CV.pdf';

const About: React.FC = () => {
  return (
    <Container id="about-me">
      <div className="col intro">
        {/* Page title */}
        <h1>About me</h1>
        {/* Introduction */}
        <p>My name is Gabriel Ramos 👨🏽‍💻.</p>
        {/* The text body */}
        <p>
          In my 14{"'"}s, I was already coding my own websites and learning more
          of PHP and JavaScript. So, in High School, I coded NerdLine website,
          an online newspaper about pop culture, comic books, movies and games,
          where I used to work on with my friends. The project had a
          administration portal, for creating the posts. I was the responsible
          for all the front-end and back-end development. The only coder of the
          entire project. Some time later, I started using Wordpress.
        </p>
        <p>
          Since that time, I have been learning always more about programming,
          new languages and frameworks, like React and React Native (which ones
          I use the most today), also C#.NET (which I have used in some big
          important projects for companies, and for learning) and Python (for
          learning and creating data projects in the University, when I was
          graduating in Physics.)
        </p>
        <p>
          I have worked for Inventa Produtos Digitais, where I was part of many
          projects for companies and even for the government. During that time,
          I worked with Wordpress, HTML, CSS, JavaScript, React Native, GIT,
          Redux and C#/.NET.
        </p>
        <p>
          Then, I got the position as Project Manager and Front End Developer at
          Loomer Tech, where I created many mobile apps for companies and for
          internal projects, using React Native, Azure, Redux, GIT, and
          React.js.
        </p>
        <p>
          By the middle of the same year, I received an opportunity to be React
          Native Developer at Americanas S.A., the largest international
          e-commerce in Latin America. And in which I am currently working,
          using React Native, Redux, AWS, GIT, Jira and everything needed to
          learn, for making a better work everyday.
        </p>
        <p>
          During this time, studying Physics at the University, I was part of
          Rio de Janeiro Rocket Team, an extracurricular scientific group for
          building rockets for national and international competitions. Working
          on it, I was the developer of payload systems, in Python. We got #1 as
          Best Rocket, in Brazil, and #3 as Best Solid Motor Rocket, at
          Spaceport American Cup, in the USA.
        </p>
        <p>
          Then, I became front-end developer of many web and mobile projects. I
          based all my experience with focus on that position, which I enjoy the
          most and improve myself every day. The achievement of my professional
          career is to become a great full stack developer, living and working
          in the UK.
        </p>
        <p>You can download my resumé (C.V.) in the end of the page.</p>
        {/* My professional profile area */}
        <div className="profile">
          <h1>Front-end Developer</h1>
          {/* About the area */}
          <p>
            Front-end is the best stack for me, where I became professional
            into. This is where we connect the user to the application and data,
            and make all the programming logic.
          </p>
          <h2>Languages and Frameworks</h2>
          {/* Pro level languages and frameworks */}
          <p>
            <b>PRO level:</b>
            <br />
            React, React Native, TypeScript, JavaScript, ES6/7/8, HTML, CSS,
            SCSS, Sass, Redux.
          </p>
          <br />
          {/* Intermediate level */}
          <p>
            <b>Intermediate/Academic level:</b>
            <br />
            PHP, Python, LaTeX and VBA (Visual Basic).
          </p>
          <br />
          {/* Learning level */}
          <p>
            <b>Learning/Low level:</b>
            <br />
            Node.js, Ruby, Kotlin, Swift and C#.NET.
          </p>
          {/* Developer tools */}
          <h2>Dev tools</h2>
          <p>
            <li>Visual Studio Code</li>
            <li>Visual Studio</li>
            <li>Android Studio</li>
            <li>XCode</li>
            <li>Atom</li>
            <li>Sublime Text</li>
            <li>Wordpress</li>
            <li>Dreamweaver</li>
            <li>PyCharm</li>
            <li>Photoshop</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>BitBucket</li>
            <li>Microsoft Azure</li>
            <li>Docker</li>
            <li>Scrum Methodology</li>
            <li>Postgres</li>
            <li>Microsoft SQL Server</li>
            <li>Microsoft Office</li>
            <li>LibreOffice</li>
            <li>Terminal</li>
            <li>Android</li>
            <li>iOS</li>
            <li>Windows</li>
            <li>Linux Ubuntu</li>
            <li>Linux Fedora</li>
            <li>Linux Manjaro</li>
            <li>Linux Mint</li>
            <li>Arch Linux</li>
            <li>Raspberry Py</li>
            <li>MacOS</li>
          </p>
        </div>
        <a
          href={PDFCV}
          download="Gabriel_Ramos_CV"
          style={{ display: 'contents' }}
        >
          <button type="button" className="btn btn-success btn-lg btn-block">
            Click to download my resumé (C.V.)
          </button>
        </a>
      </div>
    </Container>
  );
};

export default About;
