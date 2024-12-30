import path from "path";
import { DocumentNode } from "graphql";
import { GraphQLSchema } from "graphql";
import { IResolvers } from "@graphql-tools/utils";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const allTypeDefs: DocumentNode[] = loadFilesSync(
    path.join(__dirname, "./modulos", "**", "*.gql"), { extensions: ["gql"] }
);

const allResolvers: IResolvers[] = loadFilesSync(
    path.join(__dirname, "./modulos", "**", "resolver.js"), { extensions: ["js"] }
);

const typeDefs: DocumentNode = mergeTypeDefs(allTypeDefs);
const resolvers: IResolvers = mergeResolvers(allResolvers) as IResolvers;
const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;