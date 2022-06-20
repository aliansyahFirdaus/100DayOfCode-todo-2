import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  const closeModalAction = () => {
    props.action(false);
  };

  const BackdropComponent = () => {
    return <div className={styles.backdrop} />;
  };

  const ModalComponent = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={closeModalAction}>Okay</Button>
        </footer>
      </Card>
    );
  };

  const backdropRoot = document.getElementById("backdrop-portal");
  const modalRoot = document.getElementById("overlay-portal");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropComponent onClick={closeModalAction} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalComponent
          title={props.title}
          message={props.message}
          onClick={closeModalAction}
        />,
        modalRoot
      )}
    </Fragment>
  );
}
