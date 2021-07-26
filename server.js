const { ApolloServer } = require("apollo-server");
/*
https://www.apollographql.com/docs/apollo-server/

Apollo server is an Open Source, spec-compliant GraphQL server that's compatible with any GraphQL client.

You can use Apollo Server as:
- A stand-alone GraphQL server, including in a serverless environment
- An add-on to your application's existing Node.js middleware (such as Express or Fastify)
- A gateway for a federated data graph
*/

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
