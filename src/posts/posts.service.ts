import { Injectable } from '@nestjs/common'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { DatabaseService } from 'src/database/database.service';
import { Prisma, Post } from '@prisma/client';

@Injectable()
export class PostsService {

  constructor(private prisma: DatabaseService) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const { title, content, authorId } = createPostInput;

    // Use Prisma's create method to add a new post
    return this.prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId }, // Connect the post with an existing user (author)
        },
      },
    });
  }

  async findAll(): Promise<Post[]> {
    // Find all posts with their author details
    return this.prisma.post.findMany({
      include: { author: true }, // Includes author info in the response
    });
  }

  async findOne(id: number): Promise<Post | null> {
    // Find a post by ID
    return this.prisma.post.findUnique({
      where: { id },
      include: { author: true }, // Includes author info in the response
    });
  }

  async update(id: number, updatePostInput: UpdatePostInput): Promise<Post> {
    const { title, content } = updatePostInput;

    // Update the post data using Prisma's update method
    return this.prisma.post.update({
      where: { id },
      data: {
        title,
        content,
      },
    });
  }

  async remove(id: number): Promise<Post> {
    // Delete the post by ID
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
