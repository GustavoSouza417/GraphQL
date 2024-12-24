import { gql, ApolloServer } from "apollo-server";

//interfaces
interface Usuario {
    id: String;
    nome: String;
    idade: number;
};

//importação do arquivo JSON com a base de dados
const usuarios: Usuario[] = require("../0jsons/usuarios.json");

const typeDefs = gql`
    type Usuario {
        id: ID!,
        nome: String!,
        idade: Int!
    },
    
    type Query {
        UsuarioBuscarPorId(id: ID!): Usuario
    }
`;

/*
UsuarioBuscarPorNome(nome: String!): Usuario,
UsuarioBuscarPorIdade(idade: Int!): Usuario,
UsuarioBuscarPorNomeIdade(nome: String, idade: Int): Usuario
*/

const resolvers = {
    Query: {
        UsuarioBuscarPorId(_: any, args: {id: String}): Usuario | null {
            let usuario: Usuario | null;
            usuario = (usuarios.find((usuario) => usuario.id === args.id)) || null;
            
            return usuario || null;    
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