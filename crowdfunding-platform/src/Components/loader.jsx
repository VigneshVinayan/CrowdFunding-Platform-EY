import React from "react";
import "../Components/styles/loader.module.css"; // Importing external CSS

const Loader = () => (
  <div className="loader-container">
    <div className="rainbow-loader"></div>
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Loader;
