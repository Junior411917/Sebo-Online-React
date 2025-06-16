import React, { useEffect, useState } from "react";
import Header from "../../components/HeaderMain";
import * as styles from "./Detalhes.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";

export default function Detalhes() {
  const [leiaMais, setLeiaMais] = useState({});
  const { isbn } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios
      .get(`http://localhost:8080/isbn/${isbn}`, { headers })
      .then((response) => {
        setLeiaMais(response.data);
      })
      .catch(() => {
        console.error("Deu problema na requisição");
      });
  }, [isbn]);

  return (
    <div>
      <Header />
      <main>
        <h1>Detalhes</h1>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.primeiro}>
              <p>
                <strong>ISBN:</strong> {leiaMais.isbn}
              </p>
            </div>
            <div className={styles.segundo}>
              <p>
                <strong>LIVRO:</strong> {leiaMais.titulo}
              </p>
            </div>
            <div className={styles.terceiro}>
              <p>
                <strong>AUTORES:</strong> {leiaMais.autores}
              </p>
            </div>
            <div className={styles.quarto}>
              <p>
                <strong>ANO:</strong> {leiaMais.dataPublicacao}
              </p>
            </div>
            <div className={styles.quinto}>
              <p>
                <strong>PÁGINAS:</strong> {leiaMais.numeroPaginas}
              </p>
            </div>
            <div className={styles.sexto}>
              <p>
                <strong>DESCRIÇÃO:</strong>
              </p>
            </div>

            <a href={leiaMais.urlCapa} target="_blank" rel="">
              LINK PARA A CAPA
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
