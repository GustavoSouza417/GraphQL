"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
;
//bases de dados
const usuarios = [
    {
        id: "1",
        nome: "Camilla",
        perfil: 1
    },
    {
        id: "2",
        nome: "Gustavo",
        perfil: 2
    }
];
const perfis = [
    {
        id: "1",
        nome: "Administrador"
    },
    {
        id: "2",
        nome: "Usuário"
    }
];
//você pode fazer agregação por decomposição de tipos de objeto, como ocorre entre Usuario e Perfil
const typeDefs = (0, apollo_server_1.gql) `
    type Usuario {
        id: ID!,
        nome: String!
        perfil: Perfil!
    },

    type Perfil {
        id: ID!,
        nome: String!
    },

    type Query {
        usuario(id: ID!): Usuario
    }
`;
const resolvers = {
    //qualquer resolver, com exceção do Query, recebe valores válidos no primeiro argumento de resolver
    //o valor desse argumento sempre é o objeto que foi recebido
    Usuario: {
        perfil(usuario) {
            return perfis.find(perfil => perfil.id === usuario.id) || null;
        }
    },
    Query: {
        //o primeiro argumento de usuário sempre tem valor "undefined"
        usuario(_, args) {
            return usuarios.find(usuario => usuario.id === args.id) || null;
        }
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers
});
server.listen(4001).then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});
