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

const mongoose = require("mongoose"); // Used to connect our server application to mongoDB Database
require("dotenv").config(); // Used to connect our server application to mongoDB Database

mongoose // Used to connect our server application to mongoDB Database
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
