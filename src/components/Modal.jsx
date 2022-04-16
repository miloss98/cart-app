import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import "./../styles/modal.css";

const Modal = () => {
  const { state, closeModal } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return (
    <div className="modal-container">
      <h4 className={state.alert}> {state.modalContent}</h4>
    </div>
  );
};

export default Modal;
