import React from "react";
import Advice from "./Advice";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Video from "./Video";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero">
          <div className="hero__subTitile">
            <h1>Designing Better Experience</h1>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <section className="hero__services services">
            <div className="services__items">
              <div className="row">
                <div className="col-4  services__item">
                  <p>Environmental Consulting</p>
                </div>
                <div className="col-4  services__item">
                  <p>Finance and consultancy </p>
                </div>
                <div className="col-4  services__item">
                  <p>Financial Services Consulting</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Advice />
      <Video />
      <Footer />
    </>
  );
}

export default Hero;
