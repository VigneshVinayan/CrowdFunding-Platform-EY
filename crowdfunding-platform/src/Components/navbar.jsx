import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navbar.module.css";

const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState(styles.notscrolled);

  const handleBtnClick = () => {
    setNavBackground((prev) =>
      prev === styles.scrolled ? styles.notscrolled : styles.scrolled
    );
  };

  return (
    <nav
      className={`navbar navbar-expand-md sticky-top ${styles.navbar} ${props.navBackground} ${navBackground}`}
    >
      <Link className={styles.brand} to="/">
        <img src="/navImage.png" alt="title" />
      </Link>

      <button
        onClick={handleBtnClick}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars p-1" aria-hidden="true"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">
          <li className={styles.navItem}>
            <Link to="/about-us">ABOUT US</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact-us">CONTACT US</Link>
          </li>
          {localStorage.getItem("token") && (
            <li className={styles.navItem}>
              <Link to="/admin/dashboard">Admin-Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
