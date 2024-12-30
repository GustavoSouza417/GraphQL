import { ApolloServer } from "apollo-server";
import schema from "./src/graphql/merge";

const server: ApolloServer = new ApolloServer({ 
    schema,

    formatError: (err: any) => {
        if(err.message.startsWith("O endereço de e-mail fornecido já está cadastrado!"))
            return new Error(err.message);
        return err;
    }
});

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});