import { ApolloServer } from "@apollo/server";
import { skillTypeDefs } from "../modules/skills/skill.typeDefs.js";
import { skillResolvers } from "../modules/skills/skill.resolver.js";
import { teamTypeDefs } from "../modules/teams/team.typeDefs.js";
import { teamResolvers } from "../modules/teams/team.resolver.js";

export const setupApolloServer = () => {
    const server = new ApolloServer({
        typeDefs: [
            skillTypeDefs,
            teamTypeDefs
        ],
        resolvers: [
            skillResolvers,
            teamResolvers
        ]   
    })

    return server;
}