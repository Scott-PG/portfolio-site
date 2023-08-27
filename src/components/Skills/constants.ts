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
      "Ruby",
      "Go",
      "REST",
      "GRPC",
      "GraphQL",
    ],
  },
  {
    title: "Front-end",
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
    title: "Back-end",
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
      "Fastly",
      "Jest/RTL",
      "Webpack",
      "Buildkite",
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
