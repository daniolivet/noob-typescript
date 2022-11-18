import { 
    AddUserEntry,
    NoPasswordInUserEntry,
    UpdateUserEntry,
} from '../../types/types'
import { Roles } from '../../types/enums'
import { Users } from '../../database/entity/user.entity'
import { DBConfig } from '../../database/config'


const userRepository = DBConfig.getRepository(Users)

const getUsers = async (): Promise<Users[]> => {
    return await userRepository.find();
}

const getUserById = async ( id: number ): Promise<NoPasswordInUserEntry | Object> => {
    const user = await userRepository.findBy({
        id: id
    })

    if( user.length > 0 ) {
        const { password, ...restOfUser } = user[0]

        return restOfUser
    }

    return {}
}

const addUser = async ( newUserEntry:AddUserEntry ):Promise<Number>  => {

    const emailExist = await userRepository.findBy({
        email: newUserEntry.email
    })

    if( emailExist.length > 0 ) {
        throw new Error('Exists an user with this email.')
    }

    const newUser = await userRepository.insert({
        ...newUserEntry,
        rol: Roles.Subscriber,
    })

    return newUser.raw.insertId
}

const deleteUser = async ( id: number ): Promise<Boolean> => {
    const user = await getUserById(id)

    if( Object.keys(user).length === 0 ) {
        throw new Error('User doesn\'t exist')
    }
    
    const userDelete = await userRepository.delete(id) 
    
    return Boolean(userDelete)
}

const updateUser = async ( id: number, newUserData: UpdateUserEntry ): Promise<boolean> => {

    const user = await getUserById(id)

    if( Object.keys(user).length === 0 ) {
        throw new Error('User not found')
    }

    const userUpdated = await userRepository.update(
        id,
        {
            "firstName": newUserData.firstName,
            "lastName": newUserData.lastName,
            "nickName": newUserData.nickName,
            "email": newUserData.email,
            "address": newUserData.address
        }
    )

    return Boolean(userUpdated)
}

export default {
    deleteUser,
    getUsers,
    getUserById,
    addUser,
    updateUser
}