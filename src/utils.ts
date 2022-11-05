import * as EmailValidator from 'email-validator';

export const isString = (string: string):boolean => {
    return typeof string === 'string'
}

export const isNumber = (number: number): boolean => {
    return typeof number === 'number'
}

export const isEmail = (email:string): boolean => {
    return EmailValidator.validate(email)
}