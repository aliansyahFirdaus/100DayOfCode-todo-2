import React, { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const inputUsername = useRef();
  const inputAge = useRef();

  // const [inputUsername, setInputUsername] = useState("");
  // const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState(false);

  const idGenerator = (data) => {
    const lastIdFromData = Number(data.at(-1).id.slice(1));
    const newId = `e${lastIdFromData + 1 < 10 ? "0" : ""}${lastIdFromData + 1}`;
    return newId;
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      inputUsername.current.value.trim().length === 0 ||
      inputAge.current.value.trim().length === 0
    ) {
      return setError({
        title: "Invalid Input",
        message: "Masukan username dan umur terlebih dahulu",
      });
    }
    if (Number(inputAge.current.value) < 1) {
      return setError({
        title: "Invalid Age",
        message: "Masukan umur lebih dari 0",
      });
    }
    if (!isFinite(Number(inputAge.current.value))) {
      return setError({
        title: "Invalid Age",
        message: "Masukan umur dengan angka",
      });
    }

    props.onSubmitData({
      id: idGenerator(props.currentData),
      username: inputUsername.current.value,
      age: inputAge.current.value,
    });
  };

  // const inputUsernameHandler = (e) => {
  //   setInputUsername(e.target.value);
  // };

  // const inputAgeHandler = (e) => {
  //   setInputAge(e.target.value);
  // };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          action={setError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            ref={inputUsername}
            // value={inputUsername}
            // onChange={inputUsernameHandler}
          />

          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            placeholder="age"
            ref={inputAge}
            // value={inputAge}
            // onChange={inputAgeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
