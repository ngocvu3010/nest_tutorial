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
import {Post} from "./post/entities/post.entity"
import { App2Controller } from './app2.controller';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Post])],
  controllers: [AppController, App2Controller, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
