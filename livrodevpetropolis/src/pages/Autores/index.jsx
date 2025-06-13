import styles from './Autores.module.css';
import { useNavigate } from 'react-router-dom';

export default function Autores() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.voltar} onClick={() => navigate(-1)}>⬅</button>
      <h1>AUTORES</h1>
      <div className={styles.lista}>
        <button>RAILLA</button>
        <button>LUCAS</button>
        <button>GEOVANI</button>
        <button>JOSE</button>
        <button>LEO</button>
      </div>
    </div>
  );
}
