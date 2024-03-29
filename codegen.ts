import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema/schema.ts",
  generates: {
    "src/types/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  },
  config: {
    contextType: "../../context/context#Context"
  }
};

export default config;
