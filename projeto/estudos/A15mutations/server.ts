import { ApolloServer } from "apollo-server";
import schema from "./src/graphql/merge";
import { Erros } from "./src/tipos/enums/erros";

const server: ApolloServer = new ApolloServer({ 
    schema,

    formatError: (err: any) => {
        for(let erro of Object.values(Erros)) {
            if(err.message.startsWith(erro))
                return new Error(erro);
        }

        return err;
    }
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});