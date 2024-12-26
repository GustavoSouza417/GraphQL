import { gql, ApolloServer } from "apollo-server";

interface Usuario {
    id: String;
    nome: String;
};

const usuarios: Usuario[] = [
    {
        id: "1",
        nome: "Roberta"
    },

    {
        id: "2",
        nome: "Lena"
    }
];

const typeDefs = gql`
    type Usuario {
        id: ID!,
        nome: String!
    },
    
    type Query {
        usuario(id: ID!): Usuario
    }
`;

const resolvers = {
    Query: {
        usuario(_: any, args: {id: String}): Usuario | null {
            return usuarios.find(usuario => args.id === usuario.id) || null;
        }
    }
};

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando em: " + url);
});