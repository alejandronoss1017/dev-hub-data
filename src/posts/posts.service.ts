import { Injectable } from '@nestjs/common'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'

@Injectable()
export class PostsService {
  create(createPostInput: CreatePostInput) {
    console.log('createPostInput', createPostInput)
    return 'This action adds a new post'
  }

  findAll() {
    return `This action returns all posts`
  }

  findOne(id: number) {
    return `This action returns a #${id} post`
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    console.log('updatePostInput', updatePostInput)
    return `This action updates a #${id} post`
  }

  remove(id: number) {
    return `This action removes a #${id} post`
  }
}
