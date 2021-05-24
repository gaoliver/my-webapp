import React from 'react';
import { Container } from '../../styles/pages';

const About: React.FC = () => {
  return (
    <Container id="about-me">
      <div className="col intro">
        <h1>About me</h1>
        <p>I am a programmer. I love my life.</p>
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
          Now I{"'"}m a front-end developer, expoerience on being the main
          front-end of many web and mobile projects, based all my experience
          focused on that position, which I enjoy the most and get better every
          day. The achievement of my professional life is staying ahead of many
          great and important projects and being recognized in programming field
          as an important developer, for my knowledge and the results of my
          jobs.
        </p>
        <p>
          You can download my resumé (C.V.) in the end of the page.
        </p>
      </div>
    </Container>
  );
};

export default About;
