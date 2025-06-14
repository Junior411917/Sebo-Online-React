import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as styles from "./More.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function More() {
  const [livro, setLivro] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => setLivro(response.data))
      .catch(() => {
        console.error("Erro ao carregar os detalhes do livro");
      });
  }, [id]);

  if (!livro) {
    return <p>Carregando...</p>;
  }

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(livro.preco);

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>{livro.nome}</h2>
            <div className={styles.line}></div>
            <p><strong>ISBN:</strong> {livro.isbn}</p>
            <p><strong>Preço:</strong> {precoFormatado}</p>
            <p><strong>ID da Categoria:</strong> {livro.idCategoria}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
