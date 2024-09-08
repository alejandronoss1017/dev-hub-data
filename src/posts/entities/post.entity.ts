import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class Post {
  
  @Field(() => Int, { description: 'Id of the post' })
  id: number
  
  @Field(() => String, { description: 'Title of the post' })
  title: string
  
  @Field(() => String, { description: 'Content of the post' })
  content: string
}
