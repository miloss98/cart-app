import React, { useEffect } from "react";
import "./../styles/modal.css";

const Modal = ({ modalContent, closeModal, alert }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });

  return (
    <div className="modal-container">
      <h4 className={alert}> {modalContent}</h4>
    </div>
  );
};

export default Modal;
