import styles from "./Header.module.css";
import Navigation from "./Navigation";
import React from "react";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Gerenciador de Projetos</h1>
      </header>
      <Navigation></Navigation>
    </>
  );
}
