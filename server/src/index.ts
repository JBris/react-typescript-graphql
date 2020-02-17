import "reflect-metadata"
import GitCollectionResolver from "./graphql/resolvers/GitCollectionResolver";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

const PORT = 3000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ GitCollectionResolver ]
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
