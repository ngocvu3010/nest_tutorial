import { Controller, Get, Param, Body, Post, Query, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {User} from './entities/user.entity';
import {ApiCreatedResponse, ApiOkResponse, ApiTags, ApiQuery, ApiNotFoundResponse, ApiBadRequestResponse} from "@nestjs/swagger";

@ApiTags("user")
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {

  }

  @ApiOkResponse({type: User, isArray: true})
  @ApiQuery({name: "name", required: false})
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({ type: User, description: "the description ....."})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.findById(Number(id));
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @ApiCreatedResponse({type: User})
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
