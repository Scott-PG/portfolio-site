import { SKILL_GROUPS } from "./constants";
import "./Skills.css";

const Skills = () => (
  <div className="skills">
    <h3 id="skills" className="cyan">
      Skills
    </h3>
    <div className="skills-layout">
      {SKILL_GROUPS.map(({ title, skillList }) => (
        <div key={title}>
          <h4>{title}</h4>
          <p>{skillList.join(", ")}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
