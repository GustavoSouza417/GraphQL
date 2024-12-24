import { gql, ApolloServer } from 'apollo-server';

//define o "nome" do comando
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

//é o que será executado quando o comando for chamado
const resolvers = {
    Query: {
        helloWorld(): String {
            return "Hello, world!";
        }
    }
};

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//por padrão, ele chama a porta 4000
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});