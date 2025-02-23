import React from "react";
import { Link } from "react-scroll";
import styles from "./styles/image_landing.module.css";

const ImageLanding = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Sri Aurobindo Foundation</h1>
        <p className={styles.tagline}>Join Hands, Open Minds</p>
        <Link to="Donate" spy={true} smooth={true} offset={-70} duration={500}>
          <button className={styles.donateBtn}>DONATE NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageLanding;
