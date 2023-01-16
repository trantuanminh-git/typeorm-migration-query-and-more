import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, (user) => user.pets)
  owner: User;

  constructor(name: string, owner: User) {
    this.name = name;
    this.owner = owner;
  }
}
