import path from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const allTypeDefs: any = loadFilesSync(
    path.join(__dirname, "./modulos", "**", "*.gql"), { extensions: ["gql"] }
);

const allResolvers: any = loadFilesSync(
    path.join(__dirname, "./modulos", "**", "*resolver.js"), { extensions: ["js"] }
);

const typeDefs: any = mergeTypeDefs(allTypeDefs);
const resolvers: any = mergeResolvers(allResolvers);
const schema: any = makeExecutableSchema({ typeDefs, resolvers });

export default schema;