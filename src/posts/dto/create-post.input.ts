import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
  
  @Field(() => String, { description: 'Title of the post' })
  title: string
  
  @Field(() => String, { description: 'Content of the post' })
  content: string

  // Author id of the post
  @Field(() => Int, { description: 'Author id of the post' })
  authorId: number
}
