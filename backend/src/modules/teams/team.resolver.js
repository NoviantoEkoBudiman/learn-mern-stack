import { teamService } from "./team.service.js";

export const teamResolvers = {
    Query: {
        getTeams: async () => {
            return await teamService.getTeam();
        }
    },
    Mutation: {
        addTeam: async (_, args) => {
            return await teamService.addTeam(args);
        },

        updateTeam: async (_, {id, args}) => {
            return await teamService.updateTeam(id, args);
        },

        deleteTeam: async (_, {id}) => {
            return await teamService.delete(id);
        }
    },
}