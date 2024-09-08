import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { Post } from './entities/post.entity'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post, { description: 'Create a post' })
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) : Promise<Post>{
    return this.postsService.create(createPostInput)
  }

  @Query(() => [Post], { name: 'posts', description: 'Get all posts' })
  findAll() {
    return this.postsService.findAll()
  }

  @Query(() => Post, { name: 'post', description: 'Get a post by id' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id)
  }

  @Mutation(() => Post, { description: 'Update a post by id' })
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postsService.update(updatePostInput.id, updatePostInput)
  }

  @Mutation(() => Post, { description: 'Remove a post by id' })
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.remove(id)
  }
}
