import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import {input} from './AddUser.module.css';

function AddUser(props) {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [errorModal, setErrorModal] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if (username.trim().length === 0 || age.trim().length === 0) {
            setErrorModal({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            })
            return;
        }
        if (age < 1) {
            setErrorModal({
                title: "Invalid age",
                message: "Please enter age greater that 0"
            })
            return;
        }
        props.onAddUser({
            username:username,
            age: age,
        })
        setUsername('')
        setAge('')
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const errorHandler = () => {
        setErrorModal(null)
    }

    return (
        <>
            {errorModal && <ErrorModal onConfirm={errorHandler} title={errorModal.title} message={errorModal.message} />}
            <Card className={input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={username} type="text" onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" value={age} type="number" onChange={ageChangeHandler} />

                    <Button type="submit" >
                        Add User
                    </Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
