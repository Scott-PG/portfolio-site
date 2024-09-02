import { SKILL_GROUPS } from "./constants";
import "./Skills.css";

const Skills = () => (
  <div className="skills">
    <h3 id="skills" className="cyan">
      Skills
    </h3>
    <dl className="skills-layout">
      {SKILL_GROUPS.map(({ title, skillList }) => (
        <div key={title}>
          <dt>{title}</dt>
          <dd>{skillList.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </div>
);

export default Skills;
