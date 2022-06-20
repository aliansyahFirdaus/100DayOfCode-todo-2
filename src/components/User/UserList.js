import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

export default function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.dataUsers.map((user) => (
          <li key={user.id}>{`${user.username}  (${user.age} year)`}</li>
        ))}
      </ul>
    </Card>
  );
}
