import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {User} from "./user.entity"

@Controller({path: "app", version: "2"})
export class App2Controller {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {

    return  "ngoc version 2";

    // update
    // const user = await this.appService.createUser("test");
    // return this.appService.updateUser(user.id, "somthing elese");

    // delete
    // return this.appService.delete(1);
  }
}
