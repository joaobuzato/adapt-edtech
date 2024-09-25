import { Task } from "../../types";
import Form from "../UI/Form";
import React from "react";

export default function TaskForm(props: {
  projectId: number;
  task?: Task;
  closeForm: Function;
  validate?: Function;
}) {
  const formInputs = [
    {
      id: "title",
      label: "Título",
      type: "text",
      placeholder: "Insira um título",
      value: props.task ? props.task.title : "",
      validation: {
        required: true,
        minLength: 1,
        maxLength: 50,
      },
    },
    {
      id: "description",
      label: "Descrição: ",
      type: "text",
      placeholder: "Insira uma descrição",
      value: props.task ? props.task.description : "",
      validation: {
        required: false,
      },
    },
    {
      id: "expiration_date",
      label: "Data de Vencimento:",
      type: "date",
      placeholder: "",
      value: props.task?.expirationDate ?? "",
      validation: {
        required:true
      },
    },
    {
      id: "project_id",
      label: "projectId",
      hidden: true,
      type: "text",
      placeholder: "ProjectId",
      value: String(props.projectId),
      validation: {
        required: true,
      },
    },
  ];

  const cancelHandler = () => {
    props.closeForm();
  };

  return (
    <div>
      <h3>{props.task ? "Editar tarefa" : "Cadastrar Tarefa"}</h3>
      <Form
        onCancelCallback={cancelHandler}
        onSuccessCallback={cancelHandler}
        onErrorCallback={cancelHandler}
        formId="taskForm"
        endpoint="/tasks"
        entityId={props.task ? props.task.id : 0}
        inputs={formInputs}
      />
    </div>
  );
}
