import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs } from './schema/Schema.js';
import{resolvers}  from "./schema/Resolvers.js";


//import Resolvers from "./shema/resolvers.js";
/*gql query = query GetBooks {
  books {
    title
    author
  }
}
  */
const app = express();

const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);