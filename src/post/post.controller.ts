import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {Post as Post1} from "./entities/post.entity";

@ApiTags("post")
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @ApiCreatedResponse({type: Post1})
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @ApiOkResponse({type: Post1, isArray: true})
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @ApiOkResponse({type: Post1, description: "post detail"})
  @ApiOkResponse()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
