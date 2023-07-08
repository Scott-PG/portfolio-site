import "./Showcase.css";
import { SHOWCASE_ARRAY } from "./constants";

const Showcase = () => (
  <div className="showcase">
    <h3 id="showcase" className="orange">
      Showcase
    </h3>
    {SHOWCASE_ARRAY.map((showcase) => (
      <div key={showcase.title} className="showcase-div">
        <h4 className="showcase-title">{showcase.title}</h4>
        <img
          className="showcase-image"
          width="400"
          height="294"
          src={showcase.imgSrc}
          alt=""
        />
        <p className="showcase-description">{showcase.description}</p>
        <div className="showcase-links">
          <a href={showcase.deployedLink} className="showcase-link">
            Deployed Site
          </a>
          {!!showcase.githubLink ? (
            <a href={showcase.githubLink} className="showcase-link">
              GitHub Repository
            </a>
          ) : (
            <p>Private Repository</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default Showcase;
