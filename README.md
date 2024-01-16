# GraphQL Template

A basic GraphQL server than is ready to go out of the box.

It comes with the following stuff already set up -

- Linting via [ESlint](https://eslint.org) and [Prettier](https://prettier.io)
- Commit hooks for linting via [Husky](https://typicode.github.io/husky/)
- Full type support for things such as resolvers via [Codegen](https://the-guild.dev/graphql/codegen)

There are 7 npm scripts available by default -

- `start` This builds the code and then runs the JS code that is created.
- `start:dev` This runs the app in watch mode so that it restarts when any changes are made.
- `build` This compiles the TS code in JS.
- `test` This runs any Jest tests that are found.
- `prepare` This installs any Husky hooks you set up.
- `generate` This will generate the required types based on your GraphQL schema and resolver context.
- `postinstall` This will run after an `npm install` to make sure types are generated when you first clone the template.
