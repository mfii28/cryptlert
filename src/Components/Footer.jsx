import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
          <footer className="footer" data-aos="fade-up">

<div className="footer-top section">
  <div className="container">

    <div className="footer-brand">

      <Link href="#" className="logo">
        <img src="./assets/images/logo.svg" width="185" height="31" alt="Cryptolert home
" />
      </Link>

      <p className="footer-text">
        Bitcoin, first released as open-source software in is the first decentralized cryptocurrency. Since the
        release of
        bitcoin
      </p>

    </div>

    <ul className="footer-list">

      <li>
        <Link href="#" className="footer-link">Home</Link>
      </li>

      <li>
        <Link href="#" className="footer-link">About</Link>
      </li>

      <li>
        <Link href="#team" className="footer-link">Market</Link>
      </li>

      <li>
        <Link href="#" className="footer-link">Trading</Link>
      </li>

      <li>
        <Link href="#" className="footer-link">Team</Link>
      </li>

    </ul>

    <div className="social-wrapper">

      <p className="h3 social-list-title">Join the Conversation</p>

      <ul className="social-list">

        <li>
          <Link href="#" className="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </li>

        <li>
          <Link href="#" className="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
        </li>

        <li>
          <Link href="#" className="social-link">
            <ion-icon name="logo-dribbble"></ion-icon>
          </Link>
        </li>

        <li>
          <Link href="#" className="social-link">
            <ion-icon name="logo-behance"></ion-icon>
          </Link>
        </li>

      </ul>

    </div>

  </div>
</div>

<div className="footer-bottom">
  <div className="container">

    <p className="copyright">
      Copyright 2023. All rights reserved.
    </p>

    <ul className="footer-bottom-list">

      <li>
        <Link href="#" className="footer-bottom-link">Support</Link>
      </li>

      <li>
        <Link href="#" className="footer-bottom-link">Privacy Policy</Link>
      </li>

    </ul>

  </div>
</div>

</footer>


    </div>
  )
}

export default Footer