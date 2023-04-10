import { ShowcaseSection } from "./types";

import brewersGuidePic from "../../assets/images/brewers-guide-screen.png";
import anChoiPic from "../../assets/images/an-choi-screen.png";
import payPaladinPic from "../../assets/images/paypaladin-screen.png";

export const SHOWCASE_ARRAY: ShowcaseSection[] = [
  {
    title: "PayPaladin",
    imgSrc: payPaladinPic,
    description:
      "PayPaladin is a site that allows virtual gameplay currency transactions between D&D players. The key challenge with this page is authentication, limiting edit functionality to a user's characters and campaigns, while still being open enough to allow multiple users to safely use it. The back-end and front-end are built from scratch in React and Rails.",
    deployedLink: "https://scottpg-paypaladin.netlify.app/",
    githubLink: "https://github.com/Scott-PG/PayPaladin",
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
    title: "The Brewer's Guide",
    imgSrc: brewersGuidePic,
    description:
      "The Brewer's Guide is a class project based on a public database of craft beer and breweries, BreweryDB. The project was to use React to render the API in a seamless and non-apparent way. I also had some fun using React Storybook to render a custom set of navigation buttons, themed around beer bottles. The labels on the bottles are page numbers.",
    deployedLink: "https://scottpg-the-brewers-guide.netlify.app/",
    githubLink: "https://github.com/Scott-PG/the-brewers-guide",
  },
];
