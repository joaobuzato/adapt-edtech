import styles from "./Home.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Gerenciador de Projetos</h2>
      <p className={styles.paragraph}>
        {`O Gerenciador de Projetos é um projeto que tem como objetivo auxiliar o usuário a organizar suas tarefas de forma eficiente. `}
      </p>
    </>
  );
}
