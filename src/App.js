import React, { useState } from "react";
import "./styles.css";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

export default function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserList((previousState) => {
      return [
        ...previousState,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div className="App">
      <h1>Welcome to Demo App </h1>
      <h3>Practice Make Man Perfect</h3>
      <p />
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}
