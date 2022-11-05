import usersData from './users.json'
import { UserEntry, NoPasswordInUserEntry, AddUserEntry } from '../../types'
import { Roles } from '../../enums'

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

const addUser = ( newUserEntry:AddUserEntry ): AddUserEntry  => {

    const emailExist = users.find( user => user.email === newUser.email )
    if( emailExist ) {
        throw new Error(`A user with this email already exists.`)
    }

    const newUser = {
        id: users.length + 1,
        ...newUserEntry,
        rol: Roles.Subscriber,
        create_date: new Date().toLocaleDateString()
    }

    users.push(newUser)

    return newUser
}

const deleteUser = ( id: number ) : UserEntry[] => {
    const userIndex = users.findIndex( user => user.id === id)

    if( !userIndex ) {
        throw new Error('User doesn\'t exist')
    }
    
    const user = users.splice(userIndex)

    return user
}

export default {
    deleteUser,
    getUsers,
    getUserById,
    addUser
}