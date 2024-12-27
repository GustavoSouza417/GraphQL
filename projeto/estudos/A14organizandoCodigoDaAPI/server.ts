import { ApolloServer } from "apollo-server";
import schema from "./src/graphql/merge";

const server: ApolloServer = new ApolloServer({ schema });

server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});