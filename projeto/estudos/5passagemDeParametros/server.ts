import { gql, ApolloServer } from "apollo-server";

//interfaces
interface Produto {
    id: String; //ID em GraphQL é String, então por isso está sendo passado como String
    nome: String;
    preco: number;
};

const typeDefs = gql`
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
        produtoBuscarPorId(_: any, args: {id: String}): Produto | null {
            if(args.id === "1") {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            };

            //se não encontrar o produto, retorna null
            return null;
        },

        produtoBuscarPorNome(_: any, args: {nome: String}): Produto | null {
            if(args.nome = "Cama") {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            };

            return null;
        },

        produtoBuscarPorPreco(_: any, args: {preco: number}): Produto | null {
            if(args.preco = 3000.00) {
                return {
                    id: "1",
                    nome: "Cama",
                    preco: 3000.00
                };
            };

            return null;
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