"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
//importação do arquivo JSON com a base de dados
const usuarios = require("../0jsons/usuarios.json");
const typeDefs = (0, apollo_server_1.gql) `
    type Usuario {
        id: ID!,
        nome: String!,
        idade: Int!
    },
    
    type Query {
        UsuarioBuscarPorId(id: ID!): Usuario
    }
`;
/*
UsuarioBuscarPorNome(nome: String!): Usuario,
UsuarioBuscarPorIdade(idade: Int!): Usuario,
UsuarioBuscarPorNomeIdade(nome: String, idade: Int): Usuario
*/
const resolvers = {
    Query: {
        UsuarioBuscarPorId(_, args) {
            let usuario;
            usuario = (usuarios.find((usuario) => usuario.id === args.id)) || null;
            return usuario || null;
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
