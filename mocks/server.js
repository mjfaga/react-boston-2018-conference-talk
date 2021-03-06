const {ApolloServer} = require('apollo-server');
const requireText = require('require-text');

const typeDefs = requireText('./schema.graphql', require);

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen({port: 3001}).then(({url}) => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);
});
