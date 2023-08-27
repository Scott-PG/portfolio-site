import { ProjectsSection } from "./types";

import anChoiPic from "../../assets/images/an-choi-screen.png";
import payPaladinPic from "../../assets/images/paypaladin-screen.png";
import mortarPic from "../../assets/images/mortar-screen.png";

export const PROJECT_ARRAY: ProjectsSection[] = [
  {
    title: "Mortar",
    imgSrc: mortarPic,
    description:
      "Mortar is the internal style library at Policygenius. It provides visual consistency as well as a better developer experience. I contributed to the library as well as wrote internal RFCs, including one to define its release process. I also contributed to an internal form library that leverages Mortar and is used across Policygenius.",
    deployedLink: "https://mortar.policygenius.com/",
  },
  {
    title: "An Choi",
    imgSrc: anChoiPic,
    description:
      "This project is a restaurant website makeover that I and two other engineers did with a group of UX Designers. The original website had, at one time, captured the aesthetic of an eclectic, neighborhood bar. With a lot of love, we updated it to be up to modern standards, mobile-friendly, and easier to use while still retaining its charm.",
    deployedLink: "https://an-choi.netlify.app/",
    githubLink: "https://github.com/Scott-PG/AnChoi",
  },
  {
    title: "PayPaladin",
    imgSrc: payPaladinPic,
    description:
      "PayPaladin is a site that allows virtual gameplay currency transactions between D&D players. The key challenge with this page is authentication, limiting edit functionality to a user's characters and campaigns, while still being open enough to allow multiple users to safely use it. The back-end and front-end are built from scratch in React and Rails.",
    deployedLink: "https://scottpg-paypaladin.netlify.app/",
    githubLink: "https://github.com/Scott-PG/PayPaladin",
  },
];
