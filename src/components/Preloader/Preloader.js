import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="Preloader">
      <div className="Preloader__circle"></div>
      <p className="Preloader__text">Идет поиск новостей...</p>
    </div>
  );
};

export default Preloader;
