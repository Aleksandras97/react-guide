import Card from '../UI/Card'
import UserItem from './UserItem'
import styles from './UserList.module.css'

const UserList = ({users}) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map(user => (
                    <UserItem 
                        key={user.id}
                        name={user.username}
                        age={user.age}
                    />
                ))}
            </ul>

        </Card>
    )
}

export default UserList
