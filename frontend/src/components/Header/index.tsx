import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo do DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por Alonso Estevam, com base no projeto do
          <a href="https://www.instagram.com/devsuperior.ig"> @DevSuperior</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
