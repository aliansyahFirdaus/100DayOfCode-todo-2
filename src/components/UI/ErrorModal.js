import React from "react";
import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  const closeModalAction = () => {
    props.action(undefined);
  };

  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={closeModalAction}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
