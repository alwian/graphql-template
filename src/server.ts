import "dotenv/config.js";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import schema from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import cors from "cors";
import { serverConfig } from "./config/index.js";
import { ExampleDataSource } from "./dataSources/index.js";
import { Context } from "./context/index.js";

const app = express();

const server = new ApolloServer<Context>({
  typeDefs: schema,
  resolvers
});

await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({
      req,
      dataSources: {
        exampleDataSource: new ExampleDataSource()
      }
    })
  })
);

const { port, host } = serverConfig;

app.listen(port, host, () => {
  console.info(`Listening on http://${host}:${port}/graphql`);
});
