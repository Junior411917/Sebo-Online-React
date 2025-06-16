import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";
import { useTheme } from "../context";

export default function HeaderMain() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <header className={styles.header}>
      <button
        id="toggleMode"
        className={styles.themeToggle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <div className={styles.container}>
        <h1 className={styles.logo}>Livraria Dev Petrópolis</h1>
        <Link to="/" className={styles.voltarLogin}>
          Voltar para a página inicial de login
        </Link>
      </div>
    </header>
  );
}
