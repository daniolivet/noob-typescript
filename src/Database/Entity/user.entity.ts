import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
} from "typeorm"
import { Roles } from "../../types/enums"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 100,
    })
    firstName: string

    @Column({
        type: "varchar",
        length: 100,
    })
    lastName: string

    @Column({
        type: "varchar",
        length: 100,
    })
    nickName: string

    @Column({
        type: "varchar",
        length: 100,
    })
    email: string

    @Column()
    password: string

    @Column({
        type: "varchar",
        length: 200,
    })
    address: string

    @Column({
        type: "varchar",
        length: 50,
    })
    rol: Roles
}