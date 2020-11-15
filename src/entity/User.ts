import {Entity, PrimaryGeneratedColumn, Column, Unique, Index, OneToMany} from "typeorm";
import { Account } from "./Account";
import { Todo } from "./Todo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    firstName: string;

    @Column({ length: 40 })
    lastName: string;

    @Column()
    age: number;

    @Column({ length: 8 })
    @Index({ unique: true })
    dni: string;

    //(clase, atributo)
    @OneToMany(()=> Todo, todo => todo.user )
    
    todos: Todo[]

    @OneToMany(()=> Account, account => account.user )

    accounts: Account[]
}
