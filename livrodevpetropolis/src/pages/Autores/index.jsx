import Header from '../../components/Header';
import styles from './Autores.module.css';

export default function Autores() {

  return (
    <div>
    <Header />
    <div className={styles.container}>
      <h1>AUTORES</h1>
      <div className={styles.lista}>
        <button onClick={()=>window.open('https://cataas.com/cat','_blank')}>RAILLA</button>
        <button onClick={()=>window.open('https://cataas.com/cat','_blank')}>LUCAS</button>
        <button onClick={()=>window.open('https://placebear.com/300/300','_blank')}>GEOVANI</button>
        <button onClick={()=>window.open('https://cataas.com/cat','_blank')}>JOSE</button>
        <button onClick={()=>window.open('https://github.com/LGomes25?tab=repositories','_blank')}>LEO</button>
      </div>
    </div>
    </div>
  );
}
