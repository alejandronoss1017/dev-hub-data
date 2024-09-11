import { join } from 'path'
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { PostsModule } from './posts/posts.module'
import { UsersModule } from './users/users.module'
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './middelware'
import { AppController } from './app.controller'
import { HealthController } from './heatlh.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    PostsModule,
    UsersModule,
    DatabaseModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
