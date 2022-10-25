import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import styles from "./App.module.css";

import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = React.useState<ITask[]>([]);
  return (
    <div>
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
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
