import React from "react";

import { ITask } from "../interfaces/Task";

interface Props {
  taskList: ITask[];
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {TaskList.length > 0 ? (
        taskList.map((task) => <p key={task.id}>{task.title}</p>)
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
