import { Fragment } from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, onCloseCart }) => {
  return (
    <Fragment>
      {reactDom.createPortal(<Backdrop onClose={onCloseCart} />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
