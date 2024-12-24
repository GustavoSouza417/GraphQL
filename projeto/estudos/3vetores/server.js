"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
    type Query {
        jogos: [String], //solicita o retorno de um vetor de Strings
        filmes: [String]!, //se o retorno do vetor der null, emite erro
        numeros: [Int!]! //emite erro se o retorno do vetor der null ou se seus valores derem null
    };
`;
const resolvers = {
    Query: {
        jogos() {
            return ["Resident Evil", "Silent Hill", "Amnésia"];
        },
        filmes() {
            return null; //retornará erro
        },
        numeros() {
            return [null]; //retornará erro
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});
