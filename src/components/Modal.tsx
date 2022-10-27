import React from "react";

import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode; //Basicamente estamos dizendo que vamos utilizar JSX
}

const closeModal = (e: React.MouseEvent): void => {
  const modal = document.querySelector("#modal");
  modal!.classList.add("hide");
};

const Modal = ({ children }: Props) => {
  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
        {/* Passo o componente como propriedade e imprimo aqui */}
      </div>
    </div>
  );
};

export default Modal;
