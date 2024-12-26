"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql/merge");
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});
