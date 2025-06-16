import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import { useTheme } from "../context";
import { useState } from "react";

export default function HeaderMain() {
  const { darkMode, setDarkMode } = useTheme();
  const [isChanging, setIsChanging] = useState(false); 

  const handleThemeToggle = () => {
    setIsChanging(true);
    setDarkMode(!darkMode);
    
    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };
  return (
    <header className={styles.header}>
      <button
        id="toggleMode"
        className={`${styles.themeToggle} ${isChanging ? styles.changing : ''}`} 
        data-mode={darkMode ? "dark" : "light"}
        onClick={handleThemeToggle}
        aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"} 
        title={darkMode ? "Clique para ativar o modo claro" : "Clique para ativar o modo escuro"} 
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className={styles.container}>
        <h1 className={styles.logo}>Livraria Dev Petrópolis</h1>
        <Link to="/" className={styles.voltarLogin}>
          <span>🏠</span>
          Login
        </Link>
      </div>
    </header>
  );
}
