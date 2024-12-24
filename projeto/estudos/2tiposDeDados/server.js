"use strict";
/*
    Tipos de Dados:
    - ID
    - String
    - Int
    - Float
    - Boolean
*/
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
//os tipos mostrados acima são usados apenas aqui, no typeDefs
const typeDefs = (0, apollo_server_1.gql) `
    type Query {
        id: ID,
        nome: String,
        idade: Int,
        peso: Float,
        solteiro: Boolean
    }
`;
//os resolvers utilizam os tipos do TS
const resolvers = {
    Query: {
        id() {
            return 1;
        },
        nome() {
            return "Leomar";
        },
        idade() {
            return 30;
        },
        peso() {
            return 89.5;
        },
        solteiro() {
            return false;
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
