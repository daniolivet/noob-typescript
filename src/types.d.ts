import { Roles } from "./enums"

export interface UserEntry {
    id: number,
    name: string,
    surnames: string,
    nickname: string,
    email: string,
    password: string,
    address: string,
    rol: Roles,
    create_date: string
}

export type NoPasswordInUserEntry = Omit<UserEntry, 'password'>
export type AddUserEntry = Omit<UserEntry, 'id' | 'rol' | 'create_date'>
export type UpdateUserEntry = Omit<AddUserEntry, 'password'>