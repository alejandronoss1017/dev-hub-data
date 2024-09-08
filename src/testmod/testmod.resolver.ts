import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

/*
    Provide the instructions to transform the instructions coming from the client into data that GraphQL can use. 
    Resolvers are similar to traditional controllers of a REST endpoint with Nest, but are technically "providers".
*/
@Resolver()
export class TestmodResolver {

    @Query( () => String, { description: 'Hola mundo', name: 'helloworld'})
    helloworld(): String {
        return 'Hello World!';
    }
    
    @Query( () => Float, { name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100;        
    }

    @Query( () => Int, { name: 'randomFromZeroTo', description: 'Get a random number from 0 to the specified number'})
    getRandomFromZeroTo(
        @Args('to', {nullable: true, type: () => Int} ) to: number = 6)
    : number{
        // return a random number from 0 to 100
        return Math.floor(Math.random() * to);
    }
}
