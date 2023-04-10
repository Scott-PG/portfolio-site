import "./About.css";
import { bioParagraphs } from "./constants";
import profilePic from "../../assets/images/scott-square.jpg";

const About = () => (
  <div className="about">
    <h3 id="about" className="magenta">
      About
    </h3>
    <img
      className="profile-pic"
      src={profilePic}
      height="400px"
      width="400px"
      alt="Scott three-quarters profile outside"
    />
    {bioParagraphs.map((item) => (
      <p key={item.key}>{item.paragraph}</p>
    ))}
  </div>
);

export default About;
