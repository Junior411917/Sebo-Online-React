import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as styles from "./Login.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Teste</h1>
      {/* <Header />
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
      </main> */}
    </div>
  );
}
