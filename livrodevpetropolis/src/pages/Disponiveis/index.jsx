import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import * as styles from "./Disponiveis.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/produtos")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.error("Deu errado");
      });
  }, []);

  function deletePost(id) {
    axios
      .delete(`http://localhost:8080/produtos/${id}`)
      .then(() => {
        console.log("Apagado");
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch(() => {
        console.error("Não encontrado");
      });
  }

  return (
    <div>
      <HeaderMain />
      {posts.map((post, index) => (
        <main>
          <div className={styles.cards}>
            <div className={styles.card} key={index}>
              <div className={styles.bookInfo}>
                <h1>Livro</h1>
                <div className={styles.bookBlock}>{post.nome}</div>
              </div>

              <div className={styles.bookInfo}>
                <h1>Preço</h1>
                <div className={styles.priceBlock}>{post.preco}</div>
              </div>

              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/detalhes/${post.id}`}>
                    <button>Saiba +</button>
                  </Link>
                </div>

                <div className={styles.btnReadMore}>
                  <Link to={`/livropost/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>

                <div className={styles.btnDelete}>
                  <button onClick={() => deletePost(post.id)}>Vendido</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}

    </div>
  );
}
