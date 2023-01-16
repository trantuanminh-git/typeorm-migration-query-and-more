import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    // return await this.usersRepository.find(); //select * from user

    return await this.usersRepository.find({
      relations: ['pets'],
    }); //select * from user JOIN pets
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = await this.usersRepository.findOneBy({ id }); //select * from user where user.id = id
      return user;
    } catch (e) {
      throw e;
    }
  }

  async createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({ name }); // const newUser = new User(); new User.name = name;
    return this.usersRepository.save(newUser); // INSERT
  }

  async updateUser(id: number, newName: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = newName;
    return this.usersRepository.save(user); // UPDATE
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);

    return this.usersRepository.remove(user); // DELETE
  }

  // customQuery(): any {
  //   return this. usersRepository.createQueryBuilder("user").select("name").where("...")
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
