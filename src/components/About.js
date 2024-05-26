import React from "react";
import "../About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>A little bit about us</h1>
        <h4>
          Mainly, we just want to make a workout app because we all thought it'd
          be neat!
        </h4>
      </header>
      <div className="about-sections">
        <div className="about-box">
          <h1>Our Story</h1>
          <p>
            We were told to make a project for our Phase-2 assignment at
            Flatiron Schools so we decided to make it about a workout app.
          </p>
        </div>
        <div className="about-box">
          <h1>Our Goals</h1>
          <p>
            Our goal is to make a good grade for our Phase-2 Final Code Project
            at Flatiron Schools.
          </p>
          <p>
            If you want to support us in our endeavors to make more apps like
            this and succeed in completing phase-2 at Flatiron Schools, be sure
            to send positive energy to our instructor, to influence him to give
            us a good grade on this app!
          </p>
        </div>
        <div className="about-box">
          <h1>Roadmap</h1>
          <p>
            We are planning to add dice functionality and a card flip
            opportunity in the future, and we are not planning to make this a
            paid service.
          </p>
        </div>
        <div className="about-box">
          <h1>fun facts</h1>
          <p>
            Contrary to many beliefs, Lucky Fitness is NOT being sponsored NOR
            promoted by Sauron, the Lord of the One Ring, and he is NOT in
            Puerto Rico enjoying refreshing margaritas by the beach. If anywhere
            on our page says that he is, it is a bold faced lie, possibly spread
            by Gandolf the White, and his band of miscreants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
