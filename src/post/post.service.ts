import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Post} from "./entities/post.entity";

@Injectable()
export class PostService {

  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) {}

  create(createPostDto: CreatePostDto) {
    const newPost = createPostDto;

    return this.postsRepository.save(newPost);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post = this.postsRepository.findOneBy({id: id});
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    post.first_name = updatePostDto.first_name;
    return this.postsRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    return this.postsRepository.remove(post);
  }
}
