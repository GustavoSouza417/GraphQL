import { ApolloServer } from "apollo-server";
import { GraphQLError } from "graphql";
import schema from "./src/graphql/merge";
import { Erros } from "./src/tipos/enums/erros";

const server: ApolloServer = new ApolloServer({ 
    schema,

    formatError: (err: GraphQLError) => {
        for(let erro of Object.values(Erros)) {
            if(err.message.startsWith(erro))
                return new Error(erro);
        }

        return err;
    }
});

server.listen().then(({ url }: { url: string }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});