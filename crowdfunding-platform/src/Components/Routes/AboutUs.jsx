import React from "react";
import NavBar from "../navbar_notLanding";
import ScrollToTop from "../ScrollToTop"
import aurobindologo from "../assets/aurobindologo.jpg";
import styles from "../styles/aboutUs.module.css";
// import styles from "../styles/navbar.module.css";

const AboutUs = () => {
    return(
        <>
        <NavBar />
        <ScrollToTop />
        <div className={styles.container}>
            <h1 className={styles.header}>About Us</h1>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={aurobindologo}alt="Sri Aurobindo Foundation"/>
            </div>
            <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Integer tincidunt justo eget dui
          venenatis, at tempor justo sollicitudin.
        </p>
        <p className={styles.content}>
        Welcome to Aurobinda Foundation! We are committed to fostering a culture of innovation, 
          research, and technology-driven solutions. Our mission is to shape the 
          future of education and empower students with knowledge and practical skills. 
        </p>  
        <button className={styles.button}>Learn More</button>  
        </div>
        </>
    );
};

export default AboutUs;