import { gql, ApolloServer } from "apollo-server";
const { typeDefs, resolvers } = require("./src/graphql/merge");

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});