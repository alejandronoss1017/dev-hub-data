import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Id of the user' })
  id: number
  @Field(() => String, { description: 'First name of the user' })
  firstName: string
  @Field(() => String, { description: 'Last name of the user' })
  lastName: string
}
