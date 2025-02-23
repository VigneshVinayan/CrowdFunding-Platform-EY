import React from "react";
import Navbar from "./navbar";
import styles from "./styles/navbar.module.css";

const NavBar = () => {
    return(
        <>
        <div className={styles.bodyPadding}></div>
        <Navbar navBackground = {styles.scrolled} />
        </>
    );
};

export default NavBar;