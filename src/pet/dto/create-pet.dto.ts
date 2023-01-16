import { User } from 'src/user/entities/user.entity';

export class CreatePetDto {
  name: string;
  //   ownerId: number;
  owner: User;
}
