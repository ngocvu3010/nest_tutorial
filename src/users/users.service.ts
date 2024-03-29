import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto"
import {User} from "./entities/user.entity";

@Injectable()
export class UsersService {
  private users: User[] = [{id: 0, name: "ngoc vu"}, {id: 1, name: "bach"}];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter(user => user.name == name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find(user => user.id == userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {id: Date.now(), name: createUserDto.name};
    this.users.push(newUser);

    return newUser;
  }
}
