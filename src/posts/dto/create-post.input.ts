import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
  
  @Field(() => String, { description: 'Title of the post' })
  title: string
  
  @Field(() => String, { description: 'Content of the post' })
  content: string
}
