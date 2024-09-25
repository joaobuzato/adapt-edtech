import { MouseEvent } from "react";
import styles from "./Menu.module.css";
import React from "react";

export default function Menu(props: {
  setActivePage: Function;
  activePage: string;
}) {
  const setActivePageHandler = (e: MouseEvent<HTMLButtonElement>) => {
    props.setActivePage(e.currentTarget.value);
  };
  return (
    <>
      <aside className={styles.aside}>
        <button
          className={props.activePage === "listProjects" ? styles.selected : ""}
          key="listProjects"
          value="listProjects"
          onClick={setActivePageHandler}
        >
          <span>Projetos</span>
        </button>
        <button
          className={props.activePage === "about" ? styles.selected : ""}
          key="about "
          value="about"
          onClick={setActivePageHandler}
        >
          <span>Sobre</span>
        </button>
      </aside>
    </>
  );
}
