import { gql } from "graphql-tag";

const schema = gql`
  type Query {
    example: String!
  }
`;

export default schema;
