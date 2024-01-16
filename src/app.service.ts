import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class AppService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  getAll(): Promise<User[]> {
    
    return this.usersRepository.find({relations: ['pets']}); // select * from users join pets
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = this.usersRepository.findOneBy({id: id});
      return user;
    } catch (err) {
      throw err;
    }
  }

  createUser(name: string): Promise<User> {
    const newUser = this.usersRepository.create({name}); // const newUser = new User(); newUser.name = name
    return this.usersRepository.save(newUser); // insert
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await  this.getOneById(id);
    user.name = name;
    return this.usersRepository.save(user); // update
  }

  async deleteUser(id: number): Promise<User> {
    const user = await  this.getOneById(id);
    return this.usersRepository.remove(user); // delete
  }

  customeQuery(): any {
    return this.usersRepository.createQueryBuilder("user").select("name").where("")
  }

  getHello(): string {
    return 'Hello World!';
  }
}
