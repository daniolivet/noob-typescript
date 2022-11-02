import usersData from './users.json'
import { UserEntry, NonDateCreatedUserEntry } from '../../types'

const users: UserEntry[] = usersData as UserEntry[]

const getUsers = (): Array<NonDateCreatedUserEntry> => {
    return users.map( ({ id, name, surnames, nickname, email, password, address, rol }) => ({
        id, 
        name, 
        surnames, 
        nickname, 
        email, 
        password, 
        address, 
        rol
    }))
}

const addUser = () => {
    return null;
}

export default {
    getUsers,
    addUser
}