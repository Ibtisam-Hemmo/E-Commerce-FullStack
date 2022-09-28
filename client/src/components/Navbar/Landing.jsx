import React from "react";

function Landing() {
  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-headline">
          Good <span className="living-h1">Living</span> <br /> Better Live
        </h1>
        <p className="landing-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          amet laborum laboriosam numquam quos, eos recusandae voluptatum quas
          repellat pariatur?
        </p>
        <button type="button" className="btn buy-btn">
          Buy Now
        </button>
      </div>
      <img
        src="./assets/landin.png"
        alt="Landing"
        className="landing-img"
      />
    </section>
  );
}

export default Landing;
