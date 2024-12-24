"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
;
const typeDefs = (0, apollo_server_1.gql) `
    type Produto {
        id: ID!,
        nome: String!,
        preco: Float!
    },
    
    type Query {
        produtoBuscarPorId(id: ID!): Produto,
        produtoBuscarPorNome(nome: String!): Produto,
        produtoBuscarPorPreco(preco: Float!): Produto
    }
`;
const resolvers = {
    Query: {
        //o "_" serve para indicar um parâmetro opcional
        produtoBuscarPorId(_, args) {
            if (args.id === "1") {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            }
            ;
            //se não encontrar o produto, retorna null
            return null;
        },
        produtoBuscarPorNome(_, args) {
            if (args.nome = "Cama") {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            }
            ;
            return null;
        },
        produtoBuscarPorPreco(_, args) {
            if (args.preco = 3000.00) {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            }
            ;
            return null;
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
