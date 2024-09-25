import React, { useEffect, useState } from "react";
import { Task } from "../../types";
import {
  deleteItem,
  getAllItems,
  patchStatusItem,
} from "../../clients/tasksApiClient";
import TaskItem from "./TaskItem";
import Button from "../UI/Button";
import styles from "./ListTask.module.css";
import TaskForm from "./TaskForm";

export default function ListTask(props: {
  projectId: number;
  tasks: Array<Task>;
}) {
  const [tasks, setTasks] = useState(props.tasks);
  const [form, setForm] = useState(<></>);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getAllItems<Task>("/tasks", { projectId: String(props.projectId) }).then(
      (response) => {
        setTasks(response);
      }
    );
  }, [form, props.projectId]);

  const editHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const taskId = Number(event.currentTarget.value);
    openForm(taskId);
  };

  const openForm = (taskId?: number) => {
    const task = tasks.find((task) => Number(task.id) === taskId) ?? undefined;
    setIsFormOpen(true);
    setForm(
      <TaskForm
        projectId={props.projectId}
        closeForm={closeForm}
        task={task ?? undefined}
      ></TaskForm>
    );
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.value);
    deleteItem("/tasks", id);

    setTasks((oldTasks) => {
      return oldTasks.filter((task) => task.id !== id);
    });
  };
  const updateStatus = (taskId: number, status: string) => {
    patchStatusItem(
      "/tasks",
      taskId,
      status,
      () => {},
      () => {}
    );
  };
  const statusUpdateHandler = (taskId: number, status: string) => {
    updateStatus(taskId, status);
  };

  const closeForm = () => {
    setForm(<></>);
    setIsFormOpen(false);
  };

  return (
    <div className={styles["list-task"]}>
      {isFormOpen ? (
        form
      ) : (
        <>
          <h3>Lista de tarefas existentes</h3>
          <Button onClick={() => openForm()} value={"Add New Task"}>
            Adicionar uma nova tarefa
          </Button>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={deleteHandler}
                    onEdit={editHandler}
                    onStatusUpdate={statusUpdateHandler}
                  ></TaskItem>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
