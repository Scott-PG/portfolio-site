interface SkillGroup {
  title: string;
  skillList: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages and APIs",
    skillList: [
      "JavaScript",
      "Typescript",
      "Go",
      "Ruby",
      "REST",
      "GraphQL",
      "GRPC",
    ],
  },
  {
    title: "Frontend",
    skillList: [
      "HTML",
      "CSS",
      "Sass/SCSS",
      "JSS",
      "React",
      "Redux",
      "Apollo",
      "Angular",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skillList: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "Rails",
      "SQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tooling",
    skillList: [
      "Git",
      "Github",
      "Jest/RTL",
      "Webpack",
      "Buildkite",
      "Fastly",
      "Datadog",
      "Google Cloud Provider",
    ],
  },
  {
    title: "Process",
    skillList: [
      "Agile/Scrum",
      "CI/CD",
      "Code review",
      "Technical writing",
      "Testing/TDD",
      "Algorithms",
      "Data structures",
    ],
  },
  {
    title: "Collaboration",
    skillList: [
      "Mentorship",
      "Accessibility",
      "Product derisking",
      "Initiative planning",
      "Project leadership",
    ],
  },
];
