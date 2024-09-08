import { Injectable } from '@nestjs/common'
import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'

// This is a simple in-memory store. It is not recommended for production
// This is only for demo purposes
// You should use a real database like Postgres, MySQL, MongoDB, etc
const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content 1'
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content 2'
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content 3'
  }
]

@Injectable()
export class PostsService {
  create(createPostInput: CreatePostInput) {
    posts.push({
      id: posts.length + 1,
      title: createPostInput.title,
      content: createPostInput.content
    })

    return posts[posts.length - 1]
  }

  findAll() {
    return posts
  }

  findOne(id: number) {
    return posts.find((post) => post.id === id)
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    posts.map((post) => {
      if (post.id === id) {
        post.title = updatePostInput.title
        post.content = updatePostInput.content
      }
    })

    return posts.find((post) => post.id === id)
  }

  remove(id: number) {
    const deletedPost = posts.find((post) => post.id === id)
    posts.splice(posts.indexOf(deletedPost), 1)
    return deletedPost
  }
}
