import { Resolvers } from "../types/generated/graphql.js";

const resolvers: Resolvers = {
  Query: {
    example: (_, __, contextValue) => {
      return contextValue.dataSources.exampleDataSource.getData();
    }
  }
};

export default resolvers;
