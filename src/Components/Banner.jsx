import React from "react";
import { Link } from "react-router-dom";
import { HeroBanner } from "../assets";
const Banner = () => {
 


  return (
    <div>
      <section className="hero" aria-label="home" data-aos="fade-up">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Your Trusted Crypto Portfolio Tracker
            </h1>

            <p className="hero-text">
              Track and manage your cryptocurrency portfolio with confidence.
              Stay updated on the latest market trends and make informed
              investment decisions.
            </p>

            <div className="btn-group">
              <Link href="/coinlist" className="btn btn-primary">
               DashBoard
              </Link>

              <Link to="#market" className="play-btn">
                <div className="icon">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </div>

                <span className="span">How it works</span>
              </Link>
            </div>
          </div>

          <div className="hero-banner">
            <figure className="hero-banner">
              <img
                src={HeroBanner}
                width="799"
                height="823"
                alt="hero banner"
                className="w-100"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
