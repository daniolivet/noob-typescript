import { Roles } from "./enums"

export interface UserEntry {
    id: number,
    name: string,
    surnames: string,
    email: string,
    password: string,
    rol: Roles,
    create_date: string
}