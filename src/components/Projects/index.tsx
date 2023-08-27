import "./Projects.css";
import { PROJECT_ARRAY } from "./constants";

const Projects = () => (
  <div className="projects">
    <h3 id="projects" className="orange">
      Projects
    </h3>
    {PROJECT_ARRAY.map((projects) => (
      <div key={projects.title} className="projects-div">
        <h4 className="projects-title">{projects.title}</h4>
        <img
          className="projects-image"
          width="400"
          height="294"
          src={projects.imgSrc}
          alt=""
        />
        <p className="projects-description">{projects.description}</p>
        <div className="projects-links">
          <a href={projects.deployedLink} className="projects-link">
            Deployed Site
          </a>
          {!!projects.githubLink ? (
            <a href={projects.githubLink} className="projects-link">
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

export default Projects;
