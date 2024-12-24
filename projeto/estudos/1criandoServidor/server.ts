import { gql, ApolloServer } from 'apollo-server';

const resolvers = {
    Query: {
        helloWorld(): String {
            return "Hello, world!";
        }
    }
};

const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//por padrão, ele chama a porta 4000
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});