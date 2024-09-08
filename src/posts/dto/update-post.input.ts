import { CreatePostInput } from './create-post.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int, { description: 'Id of the post' })
  id: number
  @Field(() => String, { description: 'Title of the post' })
  title: string
  @Field(() => String, { description: 'Content of the post' })
  content: string
}
