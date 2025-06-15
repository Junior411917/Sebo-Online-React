import React from "react";
import { Link } from "react-router-dom";
import Back from "../../assets/back-button.svg";
import * as styles from "./HeaderMain.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/inicio" className={styles.backButton}>
          <img src={Back} alt="Voltar" />
          <span>Voltar ao Início</span>
        </Link>
       <h1 className={styles.logo}>Livros Disponíveis</h1>
      </div>
    </header>
  );
}
