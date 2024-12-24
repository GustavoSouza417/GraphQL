"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
//define o "nome" do comando
const typeDefs = (0, apollo_server_1.gql) `
    type Query {
        helloWorld: String
    }
`;
//é o que será executado quando o comando for chamado
const resolvers = {
    Query: {
        helloWorld() {
            return "Hello, world!";
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
//por padrão, ele chama a porta 4000
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});
