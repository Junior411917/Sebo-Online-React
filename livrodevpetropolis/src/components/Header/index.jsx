import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function HeaderMain() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Livraria Dev Petrópolis</h1>
        <Link to="/" className={styles.voltarLogin}>
          Voltar para a página inicial de login
        </Link>
      </div>
    </header>
  );
}
