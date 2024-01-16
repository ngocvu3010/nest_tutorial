import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./user.entity"

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  async getHello(): Promise<User> {

    return this.appService.createUser("ngoc vu");

    // update
    // const user = await this.appService.createUser("test");
    // return this.appService.updateUser(user.id, "somthing elese");

    // delete
    // return this.appService.delete(1);
  }
}
