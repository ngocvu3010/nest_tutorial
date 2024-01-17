import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column()
  first_name: string

  @ApiProperty()
  @Column()
  last_name: string

  @ApiProperty()
  @Column()
  dateOfBirth: Date

  @ApiProperty()
  @Column()
  email: string

  @ApiProperty()
  @Column()
  password: string
}
