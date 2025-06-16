import React from "react";
import * as styles from "./Error.module.css";
import Header from "../../components/HeaderMain";
import Footer from "../../components/Footer";
export default function Error() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>404 - Página não encontrada</h1>
      </div>
      <Footer />
    </div>
  );
}
