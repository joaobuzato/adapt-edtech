import ListProjects from "./Project/ListProjects";
import Home from "./Home/Home";
import styles from "./Main.module.css";
import Button from "./UI/Button";
import About from "./About/About";
import Card from "./UI/Card";
import React from "react";

export default function Main(props: {
  name: string;
  setActivePage: Function;
  activePage: string;
}) {
  const setPageHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.setActivePage(event.currentTarget.value);
  };
  return (
    <main className={styles.main}>
      <Card>
        {props.activePage === "main" && <Home></Home>}
        {props.activePage === "listProjects" && <ListProjects></ListProjects>}
        {props.activePage === "about" && <About></About>}
      </Card>
      <Button className={styles.back} value="main" onClick={setPageHandler}>
        {"< Voltar ao início"}
      </Button>
    </main>
  );
}
