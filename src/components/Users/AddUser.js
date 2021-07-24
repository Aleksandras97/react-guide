import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import { input } from "./AddUser.module.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorModal, setErrorModal] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorModal({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (age < 1) {
      setErrorModal({
        title: "Invalid age",
        message: "Please enter age greater that 0",
      });
      return;
    }
    props.onAddUser({
      username: username,
      age: age,
    });
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const errorHandler = () => {
    setErrorModal(null);
  };

  return (
    <>
      {errorModal && (
        <ErrorModal
          onConfirm={errorHandler}
          title={errorModal.title}
          message={errorModal.message}
        />
      )}
      <Card className={input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
