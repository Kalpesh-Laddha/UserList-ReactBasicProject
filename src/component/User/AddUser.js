import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(userName + "," + age);

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid InputEvent",
        message: "Please enter valid Name or Age"
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid InputEvent",
        message: "Please enter valid Age > 0"
      });
      return;
    }
    props.onAddUser(userName, age);
    setAge("");
    setUserName("");
  };

  const onClickErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onClickError={onClickErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
