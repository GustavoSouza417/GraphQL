"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
const usuarios = [
    {
        id: "1",
        nome: "Roberta",
        sobrenome: "Silva",
        idade: 30,
        email: "roberta.silva@example.com",
        telefone: "(11) 98765-4321",
        solteiro: true
    },
    {
        id: "2",
        nome: "Lena",
        sobrenome: "Costa",
        idade: 25,
        email: "lena.costa@example.com",
        telefone: "(11) 91234-5678",
        solteiro: false
    },
    {
        id: "3",
        nome: "Carlos",
        sobrenome: "Oliveira",
        idade: 40,
        email: "carlos.oliveira@example.com",
        telefone: "(21) 99876-5432",
        solteiro: true
    },
    {
        id: "4",
        nome: "Fernanda",
        sobrenome: "Pereira",
        idade: 35,
        email: "fernanda.pereira@example.com",
        telefone: "(21) 98876-5432",
        solteiro: false
    },
    {
        id: "5",
        nome: "João",
        sobrenome: "Santos",
        idade: 28,
        email: "joao.santos@example.com",
        telefone: "(31) 97765-4321",
        solteiro: true
    },
    {
        id: "6",
        nome: "Patrícia",
        sobrenome: "Lima",
        idade: 32,
        email: "patricia.lima@example.com",
        telefone: "(31) 94567-1234",
        solteiro: false
    },
    {
        id: "7",
        nome: "Lucas",
        sobrenome: "Moura",
        idade: 27,
        email: "lucas.moura@example.com",
        telefone: "(41) 98865-4321",
        solteiro: true
    },
    {
        id: "8",
        nome: "Juliana",
        sobrenome: "Almeida",
        idade: 29,
        email: "juliana.almeida@example.com",
        telefone: "(41) 98765-4321",
        solteiro: false
    },
    {
        id: "9",
        nome: "Ricardo",
        sobrenome: "Gomes",
        idade: 38,
        email: "ricardo.gomes@example.com",
        telefone: "(51) 96765-4321",
        solteiro: true
    },
    {
        id: "10",
        nome: "Mariana",
        sobrenome: "Ribeiro",
        idade: 33,
        email: "mariana.ribeiro@example.com",
        telefone: "(51) 91234-5678",
        solteiro: false
    }
];
const typeDefs = (0, apollo_server_1.gql) `
    type Usuario {
        id: ID!,
        nome: String!,
        sobrenome: String!,
        idade: Int!,
        email: String!,
        telefone: String!,
        solteiro: Boolean!
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
