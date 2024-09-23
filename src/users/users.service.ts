import { Injectable, Logger } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { DatabaseService } from 'src/database/database.service'
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: DatabaseService) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const { email, firstName, lastName } = createUserInput;

    // Use Prisma's create to insert a new user into the database
    return this.prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
      },
    });
  }

  // add logger
   async findAll(): Promise<User[]> {
    Logger.log('Fetching all users', 'UsersService');

    // try cath
    try {
      // Find all users
      return this.prisma.user.findMany({
        include: { posts: true }, 
      });
    } catch (error) {
      Logger.error(error.message, error.stack, 'UsersService');
      throw error;
    }
  }

  async findOne(id: number): Promise<User | null> {
    // Find a single user by ID
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true }, 
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const { firstName, lastName, email } = updateUserInput;

    // Update the user with new information
    return this.prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        email,
      },
    });
  }

  async remove(id: number): Promise<User> {
    // Delete the user by ID
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
