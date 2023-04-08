import React from "react";
import profilePic from "../Assets/images/scott-square.jpg";
import "./About.css";

const About = () => (
  <div className="about">
    <h3 id="about" className="magenta">
      About
    </h3>
    <img
      className="profile-pic"
      src={profilePic}
      alt="Scott three-quarters profile outside"
    />
    <p>
      I am an enthusiastic and personable software engineer who enjoys solving
      problems and connecting with other people. Whether it be the development
      of user-friendly systems or high-performance applications, I strive to
      create interactive experiences with real people in mind. I personally
      value companies that value diversity and inclusion, a sense of fun, a
      clear sense of purpose, and who do things that make the world just a
      little more pleasant.
    </p>
    <p>
      Currently, I work for Policygenius as a Software Engineer II. Previously,
      I worked at CGI Federal as a UI Developer. Before starting as a Software
      Engineer, I was a freelance theatrical lighting electrician, programmer,
      and designer in NYC, a Tour Manager for iLuminate, and a theatrical
      Production Manager aboard cruise ships.
    </p>
    <p>
      My skills include HTML, CSS, JavaScript, Typescript, React, Angular, Git,
      Node.js, Mongo, Express.js, SQL, PostgreSQL, GraphQL, Ruby, Rails, Go,
      Algorithms, and Data Structures. Experience with large codebases,
      distributed teams, CI/CD, Agile and Scrum methodologies, and reviewing
      code.
    </p>
    <p>
      When I'm not coding, I can be found playing games of all sorts,
      customizing my gaming PC, reading, and exploring Brooklyn.
    </p>
  </div>
);

export default About;
