import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import * as styles from "./Feed.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/posts")
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
      .delete(`http://localhost:8080/posts/${id}`)
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
              <header>
                <h2>{post.titulo}</h2>
              </header>
              <div className={styles.line} />
              <p>{post.descricao}</p>
              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/update/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>

                <div className={styles.btnReadMore}>
                  <Link to={`/more/${post.id}`}>
                    <button>Leia mais</button>
                  </Link>
                </div>

                <div className={styles.btnDelete}>
                  <button onClick={() => deletePost(post.id)}>Apagar</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </div>
  );
}
