import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

const INITIAL_DATA = [
  { id: "e01", username: "Aliansyah Firdaus", age: 20 },
  { id: "e02", username: "Dewi Pebriyani", age: 41 },
];

function App() {
  const [users, setUsers] = useState(INITIAL_DATA);

  const addNewdata = (newData) => {
    setUsers((prevData) => [...prevData, newData]);
  };

  return (
    <>
      <AddUser currentData={users} onSubmitData={addNewdata} />
      <UserList dataUsers={users} />
    </>
  );
}

export default App;
