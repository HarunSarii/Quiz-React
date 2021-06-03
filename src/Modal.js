import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <h2>Congrats!</h2>
      <p>
        You answered {((correct / questions.length) * 100).toFixed(0)}% of
        questions correctly
      </p>
      <button className="close-btn" onClick={closeModal}>
        Play Again
      </button>
    </div>
  );
};

export default Modal;
