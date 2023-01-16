import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'db/ormconfig';
import { Pet } from './entities/pet.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), UserModule],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
