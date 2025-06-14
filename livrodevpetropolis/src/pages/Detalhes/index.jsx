import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as styles from "./Detalhes.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detalhes() {
  const [leiaMais, setLeiaMais] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/isbn/${isbn}`)
      .then((response) => {
        setLeiaMais(response.data);
      })
      .catch(() => {
        console.error("Deu problema na requisição");
      });
  }, []);
return (
  <div>
    <h1>teste</h1>
    <Header />
    <h1>teste1</h1>
    <main>
      <h1>Detalhes</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
    <div className={styles.primeiro}>
  <p><strong>ISBN:</strong> {leiaMais.isbn}</p>
  <p><strong>LIVRO:</strong> {leiaMais.titulo}</p>
</div>

<div className={styles.segundo}>
  <p><strong>AUTORES:</strong> {leiaMais.autores}</p>
  <p><strong>ANO:</strong> {leiaMais.data_publicacao}</p>
</div>

<div className={styles.terceiro}>
  <p><strong>PÁGINAS:</strong> {leiaMais.numero_paginas}</p>
  <p><strong>DESCRIÇÃO:</strong></p>
  <p>{leiaMais.descricao}</p>
  <p><strong>CAPA:</strong></p>
</div>
        
          <a href={leiaMais.url_capa} target="" rel="">
            LINK PARA A CAPA
          </a>
        </div>
      </div>
    </main>
  </div>
);
}