import { gql, ApolloServer } from "apollo-server";

//interface a ser utilizada nos tipos de retorno dos "resolvers"
interface Pessoa {
    id: number;
    nome: String;
    idade: number;
    peso: number;
    solteiro: boolean;
};

//interface a ser utilizada nos tipos de retorno dos "resolvers"
interface Produto {
    id: number;
    nome: String;
    qtdUnidades: number;
    peso: number;
    validadeVencida: boolean;
};

//no "typeDefs", cria-se os tipos, que devem ser resolvidos no "resolvers"
const typeDefs = gql`    
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
        pessoa(): Pessoa {
            return {
                id: 1,
                nome: "José",
                idade: 54,
                peso: 77.3,
                solteiro: false
            };
        },

        pessoas(): Pessoa[] {
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

        produto(): Produto {
            return {
                id: 1,
                nome: "Bolo de Chocolate",
                qtdUnidades: 1,
                peso: 2.5,
                validadeVencida: false
            };
        },

        produtos(): Produto[] {
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

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});