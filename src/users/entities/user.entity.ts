import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Post } from 'src/posts/entities/post.entity'

@ObjectType()
export class User {
  
  @Field(() => Int, { description: 'Id of the user' })
  id: number
  
  // Email of the user
  @Field(() => String, { description: 'Email of the user' })
  email: string

  @Field(() => String, { description: 'First name of the user' })
  firstName: string
  
  @Field(() => String, { description: 'Last name of the user' })
  lastName: string

  // An array of posts
  @Field(() => [Post], { description: 'Posts of the user' })
  posts: Post[]
}
