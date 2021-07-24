import AddUser from './components/Users/AddUser';
import './App.css';
import UserList from './components/Users/UserList';
import { useState } from 'react';
import Card from './components/UI/Card';
import styles from './components/Users/UserList.module.css'

function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userInfo) => {
    // console.log(userInfo);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {
        id: Math.random().toString(), 
        username: userInfo.username,
        age: userInfo.age
      }];
    })
  }

  let content = (
    <Card className={styles.users}>
      <p style={{ textAlign: "center" }}>No users found.</p>
    </Card>
  );

  if (usersList.length > 0) {
    content = (
      <UserList users={usersList} />
    );
  }



  return (
    <>
      <AddUser onAddUser={addUserHandler} />

      {content}
    </>
  );
}

export default App;
