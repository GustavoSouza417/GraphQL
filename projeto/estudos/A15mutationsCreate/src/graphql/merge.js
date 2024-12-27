"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const schema_1 = require("@graphql-tools/schema");
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const allTypeDefs = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./modulos", "**", "*.gql"), { extensions: ["gql"] });
const allResolvers = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./modulos", "**", "resolver.js"), { extensions: ["js"] });
const typeDefs = (0, merge_1.mergeTypeDefs)(allTypeDefs);
const resolvers = (0, merge_1.mergeResolvers)(allResolvers);
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers });
exports.default = schema;
