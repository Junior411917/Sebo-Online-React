import { Link } from "react-router-dom";
import * as styles from "./Footer.module.css";
import githubLogo from "../image/github-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <span className={styles.copyright}>
            ©2025 Livraria Dev Petrópolis | Desenvolvido por equipe Serratec
          </span>
          <div className={styles.links}>
            <span>Política de Privacidade</span>
            <span className={styles.separador}>|</span>
            <span>Termos de Uso</span>
            <span className={styles.separador}>|</span>
            <span>Email: suporte@devpetropolis.com</span>
          </div>
        </div>

        <div className={styles.socialSection}>
          <span className={styles.contact}>Dúvidas? Fale conosco!</span>
          <a 
            href="https://github.com/Junior411917/Sebo-Online-React" 
            target="_blank" 
            rel=""
            className={styles.githubLink}>
            <img src={githubLogo} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}
