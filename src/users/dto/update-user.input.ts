import { CreateUserInput } from './create-user.input'
import { InputType, Field, PartialType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, { description: 'Id of the user' })
  id: number
  @Field(() => String, { description: 'First name of the user' })
  firstName: string
  @Field(() => String, { description: 'Last name of the user' })
  lastName: string
}
