"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
;
//bases de dados
const usuarios = [
    {
        id: "1",
        nome: "Lucas",
        perfil: "1"
    },
    {
        id: "2",
        nome: "Joana",
        perfil: "2"
    }
];
var tipoPerfis;
(function (tipoPerfis) {
    tipoPerfis["ADMINISTRADOR"] = "Administrador";
    tipoPerfis["USUARIO"] = "Usu\u00E1rio";
})(tipoPerfis || (tipoPerfis = {}));
;
const perfis = [
    {
        id: "1",
        nome: tipoPerfis.ADMINISTRADOR
    },
    {
        id: "2",
        nome: tipoPerfis.USUARIO
    }
];
const typeDefs = (0, apollo_server_1.gql) `
    type Usuario {
        id: ID!,
        nome: String!,
        perfil: Perfil
    },

    type Perfil {
        id: ID!,
        nome: String!
    },

    type Query {
        usuario(id: ID!): Usuario      
    }
`;
//resoluções dos tipos de objetos
const resolvers = {
    Usuario: {
        perfil(usuario) {
            return perfis.find(perfil => perfil.id === usuario.perfil) || null;
        }
    },
    Query: {
        usuario(_, args) {
            return usuarios.find(usuario => usuario.id === args.id) || null;
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
