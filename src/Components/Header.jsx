import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="#" className="logo">
          <img src="./assets/images/logo.svg" width="185" height="31" alt="Cryptolert home" />
        </Link>

        <nav className={`navbar ${mobileMenuVisible ? 'active' : ''}`} data-navbar>

          <div className="navbar-top">
            <Link to="#" className="logo">
              <img src="./assets/images/logo.svg" width="185" height="31" alt="Coinlert home" />
            </Link>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={handleToggleMobileMenu}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <Link to="#" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">Services</Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">Resources</Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">Pricing</Link>
            </li>
            <li>
              <Link to="#" className="navbar-link">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="btn-group">
          <Link to="#" className="btn ghost-btn">Contact Us</Link>
          <Link to="/coin" className="btn btn-primary">Dashboard</Link>
        </div>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler onClick={handleToggleMobileMenu}>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

        <div className="overlay" data-overlay data-nav-toggler></div>
      </div>
    </header>
  );
}

export default Header;
