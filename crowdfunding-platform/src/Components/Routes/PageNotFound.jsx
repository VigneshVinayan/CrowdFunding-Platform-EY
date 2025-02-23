import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar_notLanding";
import ScrollToTop from "../ScrollToTop";
import NotFound from "../assets/404.jpg";
import styles from "../styles/pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>Page Not Found</h1>
        <p className={styles.content}>
        True wealth is that which one offers to the Divine You are rich only by the money that you give to the Divine Cause. You are richer with the wealth you give than with the wealth you keep in your possession <br /> --Sri Aurobindo
          <br />
          <img className={styles.image} src={NotFound} alt="PageNotFound" />
          <br />
          Please contact us for any issue : <Link to="/contact-us">here</Link>
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default PageNotFound;

