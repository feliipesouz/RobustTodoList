import React, { ChangeEvent, FormEvent } from "react"; //FormEvent para submetermos o formulário

import styles from "./TaskForm.module.css";

import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //Pode vir ou não(só enviarei quando eu precisar), pois terei fomulário de adição também!
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = React.useState<number>(0);
  const [title, setTitle] = React.useState<string>("");
  const [difficulty, setDifficulty] = React.useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Conseguirei enviar o formulário sem que ele submeta, recarregue a página!

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]); //Por padrão, gera um erro pois é opcional, confirmo que ele virá com um !.

    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //ChangeEvent para podermos alterar os eventos que ocorrem na tela.
    if ((e.target.name === "title")) {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value)); //Transformando o input em number
    }
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
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
