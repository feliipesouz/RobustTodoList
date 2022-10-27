import React from "react";

import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode; //Basicamente estamos dizendo que vamos utilizar JSX
}

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
        {/* Passo o componente como propriedade e imprimo aqui */}
      </div>
    </div>
  );
};

export default Modal;
