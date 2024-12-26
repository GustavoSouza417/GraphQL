import { gql, ApolloServer } from "apollo-server";

//interfaces
interface Usuario {
    id: String;
    nome: String;
    perfil: String;
};

interface Perfil {
    id: String;
    nome: String;
};

//bases de dados
const usuarios: Usuario[] = [
    {
        id: "1",
        nome: "Lucas",
        perfil: "1"
    },

    {
        id: "2",
        nome: "Joana",
        perfil: "2"
    }
];

enum tipoPerfis {
    ADMINISTRADOR = "Administrador",
    USUARIO = "Usuário"
};

const perfis: Perfil[] = [
    {
        id: "1",
        nome: tipoPerfis.ADMINISTRADOR
    },

    {
        id: "2",
        nome: tipoPerfis.USUARIO
    }
];

//tipos de objetos (era para usar esse TipoPerfil no Perfil.nome, mas não consegui e deixei como String!)
const typeDefs: any = gql`
    type Usuario {
        id: ID!,
        nome: String!,
        perfil: Perfil
    },

    enum TipoPerfil {
        ADMINISTRADOR,
        USUARIO
    },

    type Perfil {
        id: ID!,
        nome: String!
    },

    type Query {
        usuario(id: ID!): Usuario      
    }
`;

//resoluções dos tipos de objetos
const resolvers: any = {
    Usuario: {
        perfil(usuario: Usuario): Perfil | null {
            return perfis.find(perfil => perfil.id === usuario.perfil) || null;
        }
    },
    
    Query: {
        usuario(_: any, args: {id: String}): Usuario | null {
            return usuarios.find(usuario => usuario.id === args.id) || null;
        }
    }
};

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => {
    console.log("Servidor rodando com sucesso em: " + url);
});