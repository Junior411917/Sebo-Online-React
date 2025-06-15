import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import * as styles from "./Disponiveis.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Disponiveis() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}`}: {};
    
    axios
    .get("http://localhost:8080/produtos", { headers })
    .then((response) => {
      setPosts(response.data);
      console.log(response.data);
    })
    .catch(() => {
      console.error("Deu errado");
    });
  }, []);
  
  function deletePost(id) {

    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}`}: {};

    axios
    .delete(`http://localhost:8080/produtos/${id}`, { headers })
    .then(() => {
      alert("Livro vendido!");
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
        <main key={post.id}>
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
                  <Link to={`/detalhes/${post.isbn}`}>
                    <button>Saiba +</button>
                  </Link>
                </div>

                <div className={styles.btnReadMore}>
                  <Link to={`/update/${post.isbn}`}>
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