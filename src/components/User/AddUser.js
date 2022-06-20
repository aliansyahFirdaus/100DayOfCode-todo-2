import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css"

const addUserHandler = (e) => {
    e.preventDefault()
}

export default function AddUser() {
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="username" />

        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age" placeholder="age" />
        
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
