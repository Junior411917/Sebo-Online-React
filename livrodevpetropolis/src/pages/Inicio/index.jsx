import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Inicio.module.css";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>BEM VINDOS AO SEBO</h1>
        <div className={styles.botoes}>
          <Link to="/disponiveis">
            <button>LIVROS DISPONÍVEIS</button>
          </Link>
          <Link to="/livropost">
            <button>INCLUIR NOVOS</button>
          </Link>
          <Link to="/autores">
            <button>CRÉDITOS</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
