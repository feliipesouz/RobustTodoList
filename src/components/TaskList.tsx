import React from "react";
//import pencil from '@styled-icons/evil/Pencil';
import { ITask } from "../interfaces/Task";

import styles from "./TaskList.module.css";
interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {TaskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit()}></i>
              <i
                className="bi bi-trash"
                onChange={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
