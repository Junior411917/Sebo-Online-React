import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as styles from "./More.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function More() {
  const [leiaMais, setLeiaMais] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
        setLeiaMais(response.data);
      })
      .catch(() => {
        console.error("Deu problema na requisição");
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className={styles.cards}>
          <div className={styles.card}>
            <header>
              <h2>{leiaMais.titulo}</h2>
            </header>
            <div className={styles.line}></div>
            <p>{leiaMais.conteudo}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
