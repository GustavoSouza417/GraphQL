"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
const usuarios = [
    {
        id: "1",
        nome: "Roberta"
    },
    {
        id: "2",
        nome: "Lena"
    }
];
const typeDefs = (0, apollo_server_1.gql) `
    type Usuario {
        id: ID!,
        nome: String!
    },
    
    type Query {
        usuario(id: ID!): Usuario
    }
`;
const resolvers = {
    Query: {
        usuario(_, args) {
            return usuarios.find(usuario => args.id === usuario.id) || null;
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen().then(({ url }) => {
    console.log("Servidor rodando em: " + url);
});
