import {userslist} from './UserItem.module.css'

const UserItem = ({name, age}) => {
    return (
        <li className={userslist}>
            {name} ({age} years old)
        </li>
    )
}

export default UserItem
