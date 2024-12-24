"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
;
//no "typeDefs", cria-se os tipos, que devem ser resolvidos no "resolvers"
const typeDefs = (0, apollo_server_1.gql) `    
    type Pessoa {
        id: ID!,
        nome: String!,
        idade: Int!,
        peso: Float!,
        solteiro: Boolean!
    },
    
    type Produto {
        id: ID!,
        nome: String!,
        qtdUnidades: Int!,
        peso: Float!,
        validadeVencida: Boolean!
    },
    
    type Query {
        pessoa: Pessoa!,
        pessoas: [Pessoa!]!,
        produto: Produto!,
        produtos: [Produto!]!
    }
`;
//aqui, deve-se resolver os tipos criados nos "resolvers"
const resolvers = {
    Query: {
        pessoa() {
            return {
                id: 1,
                nome: "José",
                idade: 54,
                peso: 77.3,
                solteiro: false
            };
        },
        pessoas() {
            return [
                {
                    id: 2,
                    nome: "Joana",
                    idade: 33,
                    peso: 123.7,
                    solteiro: false
                },
                {
                    id: 3,
                    nome: "Victória",
                    idade: 18,
                    peso: 49.1,
                    solteiro: true
                }
            ];
        },
        produto() {
            return {
                id: 1,
                nome: "Bolo de Chocolate",
                qtdUnidades: 1,
                peso: 2.5,
                validadeVencida: false
            };
        },
        produtos() {
            return [
                {
                    id: 2,
                    nome: "Suco de Goiaba",
                    qtdUnidades: 1,
                    peso: 1,
                    validadeVencida: true
                },
                {
                    id: 3,
                    nome: "Yakult",
                    qtdUnidades: 6,
                    peso: 0.6,
                    validadeVencida: false
                }
            ];
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
