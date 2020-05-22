import React from "react";
import profilePic from "../Assets/images/scott-square.jpg";
import "./About.css";

const About = () => {
  return (
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
        Scott is an enthusiastic and personable software engineer and lighting
        programmer who is passionate about solving problems and connecting with
        other people. Whether it be the development of user-friendly systems or
        immersive lighting designs, he strives to create interactive experiences
        with real people in mind. Scott seeks the opportunity to work for a
        mission-driven company that believes that collaboration and
        inclusiveness is central to an organization’s success.
      </p>
    </div>
  );
};

export default About;
