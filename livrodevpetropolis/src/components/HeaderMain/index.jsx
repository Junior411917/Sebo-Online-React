import React from "react";
import { Link } from "react-router-dom";
import Back from "../../assets/back-button.svg";
import * as styles from "./HeaderMain.module.css";
import { useTheme } from "../context";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme(); // Utilização do contexto
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/inicio" className={styles.backButton}>
          <img src={Back} alt="Voltar" />
          <span>Voltar ao Início</span>
        </Link>
 {/* Botão para alternar entre modo claro e escuro */}
             <button
               id="toggleMode"
               className={styles.themeToggle}
               onClick={() => setDarkMode(!darkMode)}
             >
               {darkMode ? "☀️" : "🌙"}
             </button>
      </div>
    </header>
  );
}