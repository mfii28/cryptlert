import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div>
      <section className="section cta bg-gray" aria-label="call to action">
        <div className="container">

          <h2 className="h2 section-title text-center">Start Trading on Quiety</h2>

          <p className="section-text text-center">
            If you use this site regularly and would like to help keep the site on the Internet, please consider
            donating a small.
          </p>

          <Link to="/reviews" className="btn btn-primary">
            <span className="span">Read Reviews</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </Link>

        </div>
      </section>
    </div>
  );
}

export default Cta;
