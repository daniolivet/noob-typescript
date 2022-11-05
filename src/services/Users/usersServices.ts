import usersData from './users.json'
import { UserEntry, NoPasswordInUserEntry } from '../../types'

const users: UserEntry[] = usersData as UserEntry[]

const getUsers = (): NoPasswordInUserEntry[] => {
    return users.map( ({ id, name, surnames, nickname, email, address, rol, create_date }) => ({
        id, 
        name, 
        surnames, 
        nickname, 
        email, 
        address, 
        rol,
        create_date
    }))
}

const getUserById = ( id: number ): NoPasswordInUserEntry | undefined => {
    const user = users.find( user => user.id === id)

    if( user !== undefined ) {
        const { password, ...restOfUser } = user

        return restOfUser
    }

    return undefined
}

const addUser = () => {
    return null;
}

export default {
    getUsers,
    getUserById,
    addUser
}