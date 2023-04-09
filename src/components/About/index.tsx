import profilePic from "../../Assets/images/scott-square.jpg";
import "./About.css";
import { bioParagraphs } from "./constants";

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
    {bioParagraphs.map((item) => (
      <p key={item.key}>{item.paragraph}</p>
    ))}
  </div>
);

export default About;
