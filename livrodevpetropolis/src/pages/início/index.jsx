import styles from './Início.module.css';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className={styles.container}>
      <h1>BEM VINDOS AO SEBO</h1>
      <div className={styles.botoes}>
        <Link to="/posts"><button>LIVROS DISPONÍVEIS</button></Link>
        <Link to="/update"><button>INCLUIR NOVOS</button></Link>
        <Link to="/autores"><button>CRÉDITOS</button></Link>
      </div>
    </div>
  );
}
