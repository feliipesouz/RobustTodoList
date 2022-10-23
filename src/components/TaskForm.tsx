import React, { ChangeEvent, FormEvent } from "react"; //FormEvent para submetermos o formulário

import styles from "./TaskForm.module.css";

import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string>("");
  const [difficulty, setDifficulty] = React.useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //ChangeEvent para podermos alterar os eventos que ocorrem na tela.
    if ((e.target.name = "title")) {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value)); //Transformando o input em number
    }
    console.log(title);
    console.log(difficulty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
