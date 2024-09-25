import { Project } from "../../types";
import ListTask from "../Task/ListTask";
import Form from "../UI/Form";
import React from "react";

export default function ProjectForm(props: {
  project?: Project;
  closeForm: Function;
}) {
  const formInputs = [
    {
      id: "title",
      label: "Title:",
      type: "text",
      placeholder: "Enter the title",
      value: props.project ? props.project.title : "",
      validation: {
        required: true,
        minLength: 3,
        maxLength: 50,
      },
    }
  ];

  const cancelHandler = () => {
    props.closeForm();
  };

  return (
    <div>
      <h1>{props.project ? "Editar Projeto" : "Criar um Projeto"}</h1>
      <Form
        onCancelCallback={cancelHandler}
        onSuccessCallback={cancelHandler}
        onErrorCallback={cancelHandler}
        formId="projectForm"
        endpoint="/projects"
        entityId={props.project ? props.project.id : 0}
        inputs={formInputs}
      />
      {props.project && (
        <>
          <ListTask
            projectId={props.project?.id ?? 0}
            tasks={props.project?.tasks ?? []}
          ></ListTask>
        </>
      )}
    </div>
  );
}
