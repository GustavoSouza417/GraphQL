"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const { loadFilesSync, mergeTypeDefs, mergeResolvers } = require("graphql-tools");
const allTypeDefs = loadFilesSync((0, path_1.join)(__dirname, "modulos", "**", "*.gql"));
const allResolvers = loadFilesSync((0, path_1.join)(__dirname, "modulos", "**", "*resolvers.js"));
const typeDefs = mergeTypeDefs(allTypeDefs);
const resolvers = mergeResolvers(allResolvers);
module.exports = {
    typeDefs,
    resolvers
};
