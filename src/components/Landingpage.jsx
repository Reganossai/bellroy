import React from "react";

const Landingpage = () => {
  return (
    <div className="container-div">
      <div>
        <img
          src="https://bellroy-cms-images.imgix.net/our-story-2024/homepage-our-story.jpg"
          className="picc"
          alt="pic"
        />
        <h1>Designed in Melbourne</h1>
        <p>We are a design-obsessed brand based in Austrailia, but our products are carried right across the globe</p>
      </div>

      <div>
        <img
          src="https://bellroy-cms-images.imgix.net/our-story-2024/homepage-syw.jpg"
          className="picc"
          alt="pic"
        />
        <h1>Engineered slim</h1>
        <p>We re-engineered the everyday wallet back in 2010, removing all excess and slimming millions of pockets in the process.</p>
      </div>
      <div>
        <img
          src="https://bellroy-cms-images.imgix.net/our-story-2024/homepage-story-warranty.jpg"
          className="picc"
          alt="pic"
        />
        <h1>Certified B Corp</h1>
        <p>We're recognized for using business as a force for good. Which includes our development of recycled materials.</p>
      </div>

      <div>
        <img
          src="https://bellroy-cms-images.imgix.net/our-story-2024/homepage-story-b-corp.jpg"
          className="picc"
          alt="pic"
        />
        <h1>Making products that last</h1>
        <p>We're committed to making products that can be used and loved for as long as possible. Read about our product guarantees.</p>
      </div>
    </div>
  );
};

export default Landingpage;
