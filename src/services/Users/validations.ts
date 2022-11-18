import { AddUserEntry, UpdateUserEntry } from "../../types/types"
import { isString, isEmail, isNumber } from '../../utils'

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

export const parseId = (id: any): number => {
    if( id.lenght === 0  ) {
        throw new Error('Id parameter is empty.')
    }

    if(!isNumber(id)) {
        throw new Error('Id should be a number.')
    }

    return id;
}

export const toNewUserEntry = (object: any):AddUserEntry => {
    const newUser:AddUserEntry = {
        firstName: parseProp(object.firstName, 'firstName'),
        lastName: parseProp(object.lastName, 'lastName'),
        nickName: parseProp(object.nickName, 'nickName'),
        email: parseEmail(object.email),
        password: parseProp(object.password, 'password'),
        address: parseProp(object.address, 'address')
    } 

    return newUser
}

export const toUpdateUserEntry = ( object: any ): UpdateUserEntry => {
    const updateUser:UpdateUserEntry = {
        firstName: parseProp(object.firstName, 'firstName'),
        lastName: parseProp(object.lastName, 'lastName'),
        nickName: parseProp(object.nickName, 'nickName'),
        email: parseEmail(object.email),
        address: parseProp(object.address, 'address')
    } 

    return updateUser
} 