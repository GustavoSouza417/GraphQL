import { join } from "path";

const { 
    loadFilesSync,
    mergeTypeDefs,
    mergeResolvers
} = require("graphql-tools");

const allTypeDefs: any = loadFilesSync(
    join(__dirname, "modulos", "**", "*.gql")
);

const allResolvers: any = loadFilesSync(
    join(__dirname, "modulos", "**", "*resolvers.js")
);

const typeDefs: any = mergeTypeDefs(allTypeDefs);
const resolvers: any = mergeResolvers(allResolvers);

module.exports = {
    typeDefs,
    resolvers
};