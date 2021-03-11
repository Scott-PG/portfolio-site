import React from "react";
import profilePic from "../Assets/images/scott-square.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2 id="about" className="magenta">
        About
      </h2>
      <img
        className="profile-pic"
        src={profilePic}
        alt="Scott three-quarters profile outside"
      />
      <p>
        I am an enthusiastic and personable software engineer who enjoys solving
        problems and connecting with other people. Whether it be the development
        of user-friendly systems or immersive lighting designs, I strive to
        create interactive experiences with real people in mind. I seek the
        opportunity to work for a mission-driven company that believes
        collaboration and inclusiveness are central to an organization’s
        success.
      </p>
      <p>
        My skills include HTML5, CSS3, JavaScript, Git, React, Angular, Node.js,
        Mongo, Express.js, SQL, PostgreSQL, Ruby, Ruby on Rails, Algorithms, and
        Data Structures. Experience with large codebases, distributed teams, and
        reviewing code.
      </p>
    </div>
  );
};

export default About;
