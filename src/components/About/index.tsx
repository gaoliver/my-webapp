import React from 'react';
import { Container } from '../../styles/pages';
import PDFCV from '../../assets/GABRIEL_RAMOS_-_Mobile_App_Developer.pdf';

const About: React.FC = () => {
  return (
    <Container id="about-me">
      <div className="col intro">
        {/* Page title */}
        <h1>About me</h1>
        {/* Introduction */}
        <p>My name is Gabriel Ramos 👨🏽‍💻. I am Brazilian 🇧🇷.</p>
        {/* The text body */}
        <p>
          I started programming when I was 14 years-old. When I won my first
          computer, it was something really impressive to me. While my friends
          were getting amazed by social networks and games, I was amazed by
          trying to understand how were those done.
        </p>
        <p>
          I still remember my first Informatics Teacher. After tottaly basic
          classes, learning only how to use office packages, I asked her how to
          create a website. And she got surprise for a 10 years-old boy asking
          for learning more about something not necessary for the class. Then I
          got a time with her, alone in the lab, to study the basic of HTML and
          CSS. That was my very kickstart.
        </p>
        <p>
          In my 14{"'"}s, I was already coding my own websites and learning more
          of PHP and JavaScript. So, in High School, I coded NerdLine website,
          an online newspaper about pop culture, comic books, movies and games,
          where I used to work on with my friends. The project had a
          administration portal, for creating the posts. I was the responsible
          for all the front-end and back-end coding. The only coder of the
          entire project. Some time later, I started using Wordpress.
        </p>
        <p>
          Since that time, I{"'"}m learning always more about programming, new
          languages and frameworks, like React and React Native (which ones I
          use the most today), and also C#.NET (which I have used in some big
          important projects for companies, and for learning) and Python (for
          learning and creating data projects in the University, when I was
          greaduating in Physics.)
        </p>
        <p>
          During the time I was studying Physics at the University, I was part
          of Rio de Janeiro Rocket Team, an extracurricular scientific group for
          building rockets for national and international competition. Working
          on it, I was developer of payload system, in Python. We got #1 in Best
          Rocket category, in Brazil, and #3 in Best Solid Motor Rocket, at
          Spaceport American Cup, in the USA.
        </p>
        <p>
          Now I{"'"}m a front-end developer, expoerience on being the main
          front-end of many web and mobile projects, based all my experience
          focused on that position, which I enjoy the most and get better every
          day. The achievement of my professional life is staying ahead of many
          great and important projects and being recognized in programming field
          as an important developer, for my knowledge and the results of my
          jobs.
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
            <li>Arch Linux</li>
            <li>MacOS</li>
          </p>
        </div>
        <a
          href={PDFCV}
          download="GABRIEL_RAMOS_Frontend-Developer_CV"
          style={{ display: 'contents' }}
        >
          <button type="button" className="btn btn-primary btn-lg btn-block">
            Click to download my resumé (C.V.)
          </button>
        </a>
      </div>
    </Container>
  );
};

export default About;
