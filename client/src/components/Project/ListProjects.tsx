import React, { useEffect, useState } from "react";
import { Project } from "../../types";
import ProjectForm from "./ProjectForm";
import styles from "./ListProject.module.css";
import { deleteItem, getAllItems } from "../../clients/tasksApiClient";
import ProjectItem from "./ProjectItem";
import Button from "../UI/Button";

export default function ListProject() {
  const [projects, setProjects] = useState(Array<Project>);
  const [form, setForm] = useState(<></>);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getAllItems<Project>("/projects").then((response: Array<Project>) => {
      setProjects(response);
    });
  }, [form]);

  const editHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const project_id = Number(event.currentTarget.value);
    openForm(project_id);
  };

  const openForm = (project_id?: number) => {
    const project =
      projects.find((project) => Number(project.id) === project_id) ??
      undefined;
    setIsFormOpen(true);
    setForm(
      <ProjectForm
        closeForm={closeForm}
        project={project ?? undefined}
      ></ProjectForm>
    );
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setForm(<></>);
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.value);
    deleteItem("/projects", id);
    setProjects((oldProjects) => {
      return oldProjects.filter((project) => project.id !== id);
    });
  };

  return (
    <div className={styles["list-project"]}>
      {isFormOpen ? (
        form
      ) : (
        <>
          <h2>Lista de Projetos</h2>
          <Button onClick={() => openForm()} value={"Add New Project"}>
            Adicionar novo projeto
          </Button>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => {
                return (
                  <ProjectItem
                    key={project.id}
                    project={project}
                    onDelete={deleteHandler}
                    onEdit={editHandler}
                  ></ProjectItem>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
