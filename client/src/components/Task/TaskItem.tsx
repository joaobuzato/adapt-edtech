import { Task } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./TaskItem.module.css";
import React from "react";

export default function TaskItem(props: {
  task: Task;
  onDelete: Function;
  onEdit: Function;
  onStatusUpdate: Function;
}) {
  const editHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onEdit(event);
  };
  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.onDelete(event);
  };

  const statusUpdateHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onStatusUpdate(event);
  };

  return (
    <tr>
      <td>{props.task.title}</td>
      <td className={styles.actions}>
        <select className={styles.select} onChange={statusUpdateHandler}>
          <option value="Pendente">Pendente</option>
          <option value="Em progresso">Em progresso</option>
          <option value="Concluído">Concluído</option>
        </select>
        <button
          className={styles.button}
          value={props.task.id}
          onClick={editHandler}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className={styles.button}
          value={props.task.id}
          onClick={deleteHandler}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
}
