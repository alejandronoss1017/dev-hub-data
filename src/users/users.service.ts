import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { DatabaseService } from 'src/database/database.service'
import { Prisma, User } from '@prisma/client';

/*
const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe'
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Smith'
  }
]
*/

@Injectable()
export class UsersService {
  // async user(
  //   userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  // ): Promise<User | null> {
  //   return this.database.user.findUnique({
  //     where: userWhereUniqueInput,
  //   });
  // }

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

   async findAll(): Promise<User[]> {
    // Find all users
    return this.prisma.user.findMany({
      include: { posts: true },  // Includes posts in the response
    });
  }

  async findOne(id: number): Promise<User | null> {
    // Find a single user by ID
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },  // Includes posts in the response
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

  // findAll() {
  //   return users
  // }

  // findOne(id: number) {
  //   return users.find((user) => user.id === id)
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   users.map((user) => {
  //     if (user.id === id) {
  //       user.firstName = updateUserInput.firstName
  //       user.lastName = updateUserInput.lastName
  //     }
  //   })

  //   return users.find((user) => user.id === id)
  // }

  // remove(id: number) {
  //   const deletedUser = users.find((user) => user.id === id)
  //   users.splice(users.indexOf(deletedUser), 1)
  //   return deletedUser
  // }
}
