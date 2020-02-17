import { ApolloServer } from "apollo-server";
import { buildSchema, ObjectType, Field, Resolver, Query } from "type-graphql";
import "reflect-metadata"

const PORT = 3000;

@ObjectType()
class HelloWorld {
  
  @Field()
  message: string

} 

@Resolver(HelloWorld) 
class HelloWorldResolver {

  @Query(returns => [HelloWorld])
  hello(){
    return [{ message: "hello world" }];
  }

}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [HelloWorldResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();