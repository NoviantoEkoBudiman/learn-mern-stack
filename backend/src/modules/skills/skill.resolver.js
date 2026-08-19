import { skillService } from "./skill.service.js";

export const skillResolvers = {
    Query: {
        getSkills: async () => {
            return await skillService.getSkills();
        },
    },
    Mutation: {
        addSkill: async (_, args) => {
            return await skillService.addSkill(args);
        },

        updateSkill: async (_, {id, ...input}) => {
            return await skillService.updateSkill(id, input);
        },

        deleteSkill: async (_, {id}) => {
            return await skillService.deleteSkill(id);
        }
    }
}