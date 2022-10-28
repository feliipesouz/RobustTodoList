import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Modal from "./components/Modal";

import styles from "./App.module.css";

import { ITask } from "./interfaces/Task";
import { SettingsOutline } from "styled-icons/evaicons-outline";

function App() {
  const [taskList, setTaskList] = React.useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = React.useState<ITask | null>(null); //Isso fará o gerenciamento da tarefa que eu quero atualizar

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task)
  };

  return (
    <div>
      <Modal
        children={<TaskForm btnText="Editar Tarefa" taskList={taskList} task={taskToUpdate}/>}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você está fazendo?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas: </h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
