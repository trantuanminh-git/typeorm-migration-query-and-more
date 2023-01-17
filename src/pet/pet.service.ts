import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createPetDto: CreatePetDto) {
    const user = await this.usersRepository.findOneBy({
      id: createPetDto.id,
    });

    const newPet = new Pet(createPetDto.name, user);

    await this.petsRepository.save(newPet);
    return `This action adds a user's ${user.id} new pet`;
  }
  // async create(createPetDto: CreatePetDto, id: number) {
  //   const user = await this.usersRepository.findOneBy({ id: 3 });

  //   const pet = new Pet(createPetDto.name, user);

  //   const newPet = this.petsRepository.create(createPetDto);
  //   newPet.owner = user;
  //   await this.petsRepository.save(newPet);
  //   return `This action adds a user's ${user.id} new pet`;
  // }

  findAll() {
    return `This action returns all pet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
