import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'db/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
