import React from "react";
import "../WelcomePage.css";

const WelcomePage = () => {
  return (
    <div className="welomePageDiv">
      <h1 className="welomePageHeader">Welcome to Lucky Fitness!</h1>
      <div className="welomePageSectionDivs">
        <p className="welomePageSections">
          If you would like to see all of our workouts, or if you would like to
          add your workouts, go to our Home page, using the Home link above!
        </p>
      </div>
      <div className="welomePageSectionDivs">
        <p className="welomePageSections">
          If you would like to contact us to give us feedback or concerns,
          please, go to our Contact-Us page, using the Contact-Us link above!
        </p>
      </div>
      <div className="welomePageSectionDivs">
        <p className="welomePageSections">
          If you would like to learn more about us, please, go to our About
          page, using the About link above!
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
