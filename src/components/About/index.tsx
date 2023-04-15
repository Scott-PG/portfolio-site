import "./About.css";
import { BIO_PARAGRAPHS } from "./constants";
import profilePic from "../../assets/images/scott-square.jpg";

const About = () => (
  <div className="about">
    <h3 id="about" className="magenta">
      About
    </h3>
    <img
      className="profile-pic"
      src={profilePic}
      height="400"
      width="400"
      alt="Scott three-quarters profile outside"
    />
    {BIO_PARAGRAPHS.map((item) => (
      <p key={item.key}>{item.paragraph}</p>
    ))}
  </div>
);

export default About;
