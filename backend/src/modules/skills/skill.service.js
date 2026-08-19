import { skillRepository } from './skill.repository.js';

export const skillService = {
    getSkill: async () => {
        return await skillRepository.findAll();
    },

    addSkill: async (input) => {
        return await skillRepository.create(input);
    },

    updateSkill: async (id, input) => {
        const existingSkill = await skillRepository.findById(id);
        if(!existingSkill){
            throw new Error("Skill does not exist");
        }
        return await skillRepository.update(id, input);
    },

    deleteSkill: async(id) => {
        const existingSkill = await skillRepository.findById(id);
        if(!existingSkill){
            throw new Error("Skill does not exist");
        }
        return await skillRepository.delete(id);
    }
}