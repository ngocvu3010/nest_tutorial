import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsersController} from './users/users.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import {User} from './user.entity';
import { App2Controller } from './app2.controller';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User])],
  controllers: [AppController, App2Controller],
  providers: [AppService],
})
export class AppModule {}
