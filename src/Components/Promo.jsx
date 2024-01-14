import React from 'react';
import { Link } from 'react-router-dom';

const CryptoTrackerService = () => {
  return (
    <div>
      <section className="section crypto-service" aria-label="crypto-service" data-aos="fade-up">
        <div className="container">

          <h2 className="h2 section-title text-center">Our Crypto Tracking Services</h2>

          <p className="section-text text-center">
            Explore our range of services designed to help you navigate the world of cryptocurrencies and make informed decisions.
          </p>

          <ul className="grid-list">

            <li>
              <div className="promo-card bg-gray">

                <div className="card-icon">
                  <ion-icon name="share-social-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 className="h3 card-title">Advanced Trading Platform</h3>

                <p className="card-text">
                  Experience our advanced trading platform tailored for cryptocurrency enthusiasts.
                </p>

                <Link to="/trading-platform" className="btn-link">
                  <span className="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>

              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">

                <div className="card-icon">
                  <ion-icon name="pricetags-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 className="h3 card-title">Transparent Pricing Analytics</h3>

                <p className="card-text">
                  Access transparent pricing analytics to stay informed about the latest market trends.
                </p>

                <Link to="/pricing-analytics" className="btn-link">
                  <span className="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>

              </div>
            </li>

            <li>
              <div className="promo-card bg-gray">

                <div className="card-icon">
                  <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                </div>

                <h3 className="h3 card-title">Trusted Security Measures</h3>

                <p className="card-text">
                  We prioritize the security of your assets with state-of-the-art measures.<br/><br/>
                </p>

                <Link to="/security-measures" className="btn-link">
                  <span className="span">Explore More</span>

                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </Link>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </div>
  );
}

export default CryptoTrackerService;
