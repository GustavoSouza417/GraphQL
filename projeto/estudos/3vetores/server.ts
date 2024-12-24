import { gql, ApolloServer } from "apollo-server";

const typeDefs = gql`
    type Query {
        jogos: [String], //solicita o retorno de um vetor de Strings
        filmes: [String]!, //se o retorno do vetor der null, emite erro
        numeros: [Int!]! //emite erro se o retorno do vetor der null ou se seus valores derem null
    };
`;

const resolvers = {
    Query: {
        jogos(): String[] {
            return ["Resident Evil", "Silent Hill", "Amnésia"];
        },

        filmes(): String[] {
            return null; //retornará erro
        },

        numeros(): number[] {
            return [null]; //retornará erro
        }
    }
};

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});