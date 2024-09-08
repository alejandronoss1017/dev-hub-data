import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

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

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    users.push({
      id: users.length + 1,
      ...createUserInput
    })

    return users[users.length - 1]
  }

  findAll() {
    return users
  }

  findOne(id: number) {
    return users.find((user) => user.id === id)
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    users.map((user) => {
      if (user.id === id) {
        user.firstName = updateUserInput.firstName
        user.lastName = updateUserInput.lastName
      }
    })

    return users.find((user) => user.id === id)
  }

  remove(id: number) {
    const deletedUser = users.find((user) => user.id === id)
    users.splice(users.indexOf(deletedUser), 1)
    return deletedUser
  }
}
