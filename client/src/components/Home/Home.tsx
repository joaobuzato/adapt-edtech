import styles from "./Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Gerenciador de Projetos</h2>
      <p className={styles.paragraph}>
        {`Esta é a página principal da Gerenciador de Projetos, um projeto pessoal de João Pedro Buzato, que visa ser uma forma fácil de se desenvolver um jogo em texto. `}
      </p>
    </>
  );
}
