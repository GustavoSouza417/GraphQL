import { gql, ApolloServer } from "apollo-server";



//interfaces
interface Usuario {
    id: String;
    nome: String;
    perfil: number;
};

interface Perfil {
    id: String;
    nome: String;
};



//bases de dados
const usuarios: Usuario[] = [
    {
        id: "1",
        nome: "Camilla",
        perfil: 1
    },

    {
        id: "2",
        nome: "Gustavo",
        perfil: 2
    }
];

const perfis: Perfil[] = [
    {
        id: "1",
        nome: "Administrador"
    },

    {
        id: "2",
        nome: "Usuário"
    }
];


//você pode fazer agregação por decomposição de tipos de objeto, como ocorre entre Usuario e Perfil
const typeDefs = gql`
    type Usuario {
        id: ID!,
        nome: String!
        perfil: Perfil!
    },

    type Perfil {
        id: ID!,
        nome: String!
    },

    type Query {
        usuario(id: ID!): Usuario
    }
`;



const resolvers = {
    //qualquer resolver, com exceção do Query, recebe valores válidos no primeiro argumento de resolver
    //o valor desse argumento sempre é o objeto que foi recebido
    Usuario: {
        perfil(usuario: Usuario): Perfil | null {
            return perfis.find(perfil => perfil.id === usuario.id) || null;
        }
    },

    Query: {
        //o primeiro argumento de usuário sempre tem valor "undefined"
        usuario(_: any, args: {id: String}): Usuario | null {
            return usuarios.find(usuario => usuario.id === args.id) || null;
        }
    }
};



const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen(4001).then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});