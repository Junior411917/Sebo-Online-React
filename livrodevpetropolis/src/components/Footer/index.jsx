import { Link } from "react-router-dom";
import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}>
          <p>
            Direitos autorais ©2025 Livraria Dev Petrópolis . Todos os direitos
            reservados.
          </p>
        </div>

        <div className={styles.btnNewPost}>
          <Link to={"/posts"}>
            <button>Novo Post</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
