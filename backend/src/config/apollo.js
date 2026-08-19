import { ApolloServer } from "@apollo/server";
import { skillTypeDefs } from "../modules/skills/skill.typeDefs.js";
import { skillResolvers } from "../modules/skills/skill.resolver.js";

export const setupApolloServer = () => {
    const server = new ApolloServer({
     typeDefs: [skillTypeDefs],
     resolvers: [skillResolvers]   
    })

    return server;
}