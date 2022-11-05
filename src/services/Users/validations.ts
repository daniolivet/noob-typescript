import { AddUserEntry } from "../../types"
import { isString, isEmail } from '../../utils'

const parseProp = ( property: any, nameOfProperty:string ):string => {

    if( !isString(property) ) {
        throw new Error(`Incorrect or missing ${nameOfProperty}`)
    }

    return property

}

const parseEmail = (email: any): string => {
    if(!isEmail(email)) {
        throw new Error(`Incorrect or missing email`)
    }

    return email
}

const toNewUserEntry = (object: any):AddUserEntry => {

    const newUser:AddUserEntry = {
        name: parseProp(object.name, 'name'),
        surnames: parseProp(object.surnames, 'surnames'),
        nickname: parseProp(object.nickname, 'nickname'),
        email: parseEmail(object.email),
        password: parseProp(object.password, 'password'),
        address: parseProp(object.address, 'address')
    } 

    return newUser

}

export default toNewUserEntry