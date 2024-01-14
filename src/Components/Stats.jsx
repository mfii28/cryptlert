import React from 'react';
import { Stats } from "../assets";
const AboutService = () => {
  return (
    <div>
      <section className="stats" aria-label="about-service">
        <div className="container">

          <div className="stats-content">

            <h2 className="h2 section-title">About Our Crypto Tracker Service</h2>

            <p className="section-text">
              Explore the fascinating world of cryptocurrencies with our innovative crypto tracker app. Lorem Ipsum available but the majority
            </p>

            <p className="section-text">
              Our app is designed to provide you with essential information and insights into the crypto market. All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true generator on the Internet.
            </p>

            <ul className="stats-list">

              <li>
                <div className="stats-card bg-gray">

                  <h3 className="h3 card-title">150k+</h3>

                  <p className="card-text">
                    Users Worldwide
                  </p>

                </div>
              </li>

              <li>
                <div className="stats-card bg-gray">

                  <h3 className="h3 card-title">45k+</h3>

                  <p className="card-text">
                    Active Users
                  </p>

                </div>
              </li>

              <li>
                <div className="stats-card bg-gray">

                  <h3 className="h3 card-title">16k+</h3>

                  <p className="card-text">
                    Users Trust Wallet
                  </p>

                </div>
              </li>

            </ul>

          </div>

          <figure className="stats-banner">
            <img src={Stats} width="797" height="454" alt="map" className="w-100" />
          </figure>

        </div>
      </section>

    </div>
  );
}

export default AboutService;
