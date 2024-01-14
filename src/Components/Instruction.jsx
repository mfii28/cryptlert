import React from 'react';
import { Link } from 'react-router-dom';
import { instruction1 ,instruction2 ,instruction3 ,instruction4 } from '../assets';
const Instruction = () => {
  return (
    <div>
      <section className="section instruction" aria-label="instruction">
        <div className="container">

          <h2 className="h2 section-title text-center">Explore Your Crypto Portfolio</h2>

          <p className="section-text text-center">
            Discover the journey of your crypto investments, understanding the variations in the crypto market, and making informed decisions.
          </p>

          <ul className="grid-list">

            <li>
              <div className="instruction-card bg-gray">

                <div className="card-icon">
                  <img src={instruction1} width="20" height="20" loading="lazy" alt="icon" />
                </div>

                <p className="card-text">
                  Track the performance of your crypto assets in real-time.<br/><br/>
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card bg-gray">

                <div className="card-icon">
                  <img src={instruction2} width="20" height="20" loading="lazy" alt="icon" />
                </div>

                <p className="card-text">
                  Stay informed about the latest trends and market analysis.<br/><br/>
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card bg-gray">

                <div className="card-icon">
                  <img src={instruction3} width="20" height="20" loading="lazy" alt="icon" />
                </div>

                <p className="card-text">
                  Securely manage your crypto portfolio with our trusted platform.<br/><br/>
                </p>

              </div>
            </li>

            <li>
              <div className="instruction-card bg-gray">

                <div className="card-icon">
                  <img src={instruction4} width="20" height="20" loading="lazy" alt="icon" />
                </div>

                <p className="card-text">
                  Explore advanced features for a comprehensive crypto tracking experience.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
}

export default Instruction;
