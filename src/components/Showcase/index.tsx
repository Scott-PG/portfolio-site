import "./Showcase.css";
import { SHOWCASE_ARRAY } from "./constants";

const Showcase = () => {
  return (
    <div className="showcase">
      <h3 id="showcase" className="orange">
        Showcase
      </h3>
      {SHOWCASE_ARRAY.map((showcase) => (
        <div key={showcase.title} className="portfolio-div">
          <h4 className="portfolio-title">{showcase.title}</h4>
          <img
            className="portfolio-image"
            width="400px"
            height="294px"
            src={showcase.imgSrc}
            alt={`${showcase.title} Example`}
          />
          <p className="portfolio-text">{showcase.description}</p>
          <div className="portfolio-links">
            <a href={showcase.deployedLink} className="portfolio-link">
              Deployed Site
            </a>
            <a href={showcase.githubLink} className="portfolio-link">
              GitHub Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
