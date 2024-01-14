import React from 'react'
import { Link } from 'react-router-dom'

const Application = () => {
  return (
    <div>
           <section className="app" aria-label="app">
        <div className="container">

          <div className="app-card bg-gray">

            <div className="card-content">

              <h2 className="h2 section-title">Also Available on IOS & Android</h2>

              <p className="section-text">
                This site regularly and would like to help keep the site on the Internet please consider donating a
                small.
              </p>

              <div className="btn-group">

                <Link href="#" className="btn btn-primary">
                  <ion-icon name="logo-google-playstore" aria-hidden="true"></ion-icon>

                  <div>
                    <p className="btn-text">Available on the</p>

                    <p className="btn-title">Play Store</p>
                  </div>
                </Link>

                <Link href="#" className="btn btn-primary">
                  <ion-icon name="logo-apple" aria-hidden="true"></ion-icon>

                  <div>
                    <p className="btn-text">Available on the</p>

                    <p className="btn-title">Apple Store</p>
                  </div>
                </Link>

              </div>

            </div>

            <figure className="card-banner">
              <img src="./assets/images/download-banner.png" width="383" height="384" loading="lazy"
                alt="download banner" className="w-100" />
            </figure>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Application