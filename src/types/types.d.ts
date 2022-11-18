import { Roles } from "./enums"
export interface UserEntry {
    id: number,
    firstName: string,
    lastName: string,
    nickName: string,
    email: string,
    password: string,
    address: string,
    rol: Roles,
}

export type NoPasswordInUserEntry = Omit<UserEntry, 'password'>
export type AddUserEntry = Omit<UserEntry, 'id' | 'rol' >
export type UpdateUserEntry = Omit<AddUserEntry, 'password'>