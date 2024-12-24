/*
    Tipos Escalares:
    - ID
    - String
    - Int
    - Float
    - Boolean
*/

import { gql, ApolloServer } from "apollo-server";

//os tipos mostrados acima são usados apenas aqui, no typeDefs
const typeDefs = gql`
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
        id(): number {
            return 1;
        },

        nome(): String {
            return "Leomar";
        },

        idade(): number {
            return 30;
        },

        peso(): number {
            return 89.5;
        },

        solteiro(): boolean {
            return false;
        }
    }
}

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});