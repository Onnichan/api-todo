import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Account {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  @Index({ unique: true })
  email: string;

  @Column({ length: 15 })
  password: string;

  @ManyToOne(()=> User, user => user.accounts)
  user: User
}