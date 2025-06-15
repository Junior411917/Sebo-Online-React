import { Link } from "react-router-dom";
import * as styles from "./Footer.module.css";
import githubLogo from "../image/github-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo}>
         
          <p>Direitos autorais ©2025 Livraria Dev Petrópolis</p>
          <p>Desenvolvido por equipe Serratec</p>  
            <p>Todos os direitos reservados.</p> 
        </div>
        <div className={styles.btnNewPost}>
       
         <h5>Política de Privacidade | Termos de Uso</h5> 
         <h5>Email: suporte@devpetropolis.com</h5>
         <h5>Dúvidas? Fale conosco!</h5>
         
         <Link to={"/posts"}>
        </Link><a href="https://github.com/Junior411917/Sebo-Online-React" target="_blank" rel="">
        <img src={githubLogo} alt="GitHub" />
        </a>
    </div>
</div>
    </footer>
  );
}
