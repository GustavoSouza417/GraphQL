"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const merge_1 = __importDefault(require("./src/graphql/merge"));
const server = new apollo_server_1.ApolloServer({ schema: merge_1.default });
server.listen().then(({ url }) => {
    console.log("Servidor rodando com sucesso em: " + url);
});
