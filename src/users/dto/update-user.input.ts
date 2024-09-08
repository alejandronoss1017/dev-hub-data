import { CreateUserInput } from './create-user.input'
import { InputType, Field, PartialType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  
  @Field(() => Int, { description: 'Id of the user' })
  id: number
  
  // Email of the user
  @Field(() => String, { description: 'Email of the user', nullable: true })
  email: string

  @Field(() => String, { description: 'First name of the user', nullable: true })
  firstName: string
  
  @Field(() => String, { description: 'Last name of the user', nullable: true })
  lastName: string
}