import React from "react";
import "./Showcase.css";
import brewersGuidePic from "../Assets/images/brewers-guide-screen.png";
import anChoiPic from "../Assets/images/an-choi-screen.png";
import payPaladinPic from "../Assets/images/paypaladin-screen.png";

const Showcase = () => {
  return (
    <div className="showcase">
      <h2 id="showcase" className="orange">
        Showcase
      </h2>
      <div className="portfolio-div">
        <h3 className="portfolio-title">PayPaladin</h3>
        <img
          className="portfolio-image"
          src={payPaladinPic}
          alt="Pay Paladin Example"
        />
        <p className="portfolio-text">
          PayPaladin is a site that allows virtual gameplay currency
          transactions between D&D players. The key challenge with this page is
          authentication, limiting edit functionality to a user's characters and
          campaigns, while still being open enough to allow multiple users to
          safely use it. The back-end and front-end are built from scratch in
          React and Rails.
        </p>
        <div className="portfolio-links">
          <a
            href="https://scottpg-paypaladin.netlify.app/"
            className="portfolio-link"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/Scott-PG/PayPaladin"
            className="portfolio-link"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      <div className="portfolio-div">
        <h3 className="portfolio-title">An Choi</h3>
        <img
          className="portfolio-image"
          src={anChoiPic}
          alt="An Choi Example"
        />
        <p className="portfolio-text">
          This project is a restaurant website makeover that I and two other
          engineers did with a group of UX Designers. The original website had,
          at one time, captured the aesthetic of an eclectic, neighborhood bar.
          With a lot of love, we updated it to be up to modern standards,
          mobile-friendly, and easier to use while still retaining its charm.
        </p>
        <div className="portfolio-links">
          <a href="https://an-choi.netlify.app/" className="portfolio-link">
            Deployed Site
          </a>
          <a
            href="https://github.com/Scott-PG/AnChoi"
            className="portfolio-link"
          >
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="portfolio-div">
        <h3 className="portfolio-title">The Brewer's Guide</h3>
        <img
          className="portfolio-image"
          src={brewersGuidePic}
          alt="Brewer's Guide Example"
        />
        <p className="portfolio-text">
          The Brewer's Guide is a class project based on a public database of
          craft beer and breweries, BreweryDB. The project was to use React to
          render the API in a seamless and non-apparent way. I also had some fun
          using React Storybook to render a custom set of navigation buttons,
          themed around beer bottles. The labels on the bottles are page
          numbers.
        </p>
        <div className="portfolio-links">
          <a
            href="https://scottpg-the-brewers-guide.netlify.app/"
            className="portfolio-link"
          >
            Deployed Site
          </a>
          <a
            href="https://github.com/Scott-PG/the-brewers-guide"
            className="portfolio-link"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
