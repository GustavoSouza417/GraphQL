"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers = {
    Query: {
        helloWorld() {
            return "Hello, world!";
        }
    }
};
const typeDefs = (0, apollo_server_1.gql) `
    type Query {
        helloWorld: String
    }
`;
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
//por padrão, ele chama a porta 4000
server.listen();
