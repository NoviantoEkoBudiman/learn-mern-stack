import { teamRepository } from "./team.repository.js";

export const teamService = {
    getTeam: async () => {
        return await teamRepository.findAll();
    },

    addTeam: async (input) => {
        return await teamRepository.create(input);
    },

    updateTeam: async (id, input) => {
        const existingData = await teamRepository.findById(id);
        if(!existingData){
            throw new Error("Data not found");
        }
        return await teamRepository.update(id, input);
    },

    deleteTeam: async (id) => {
        const existingData = await teamRepository.findById(id);
        if(!existingData){
            throw new Error("Data not found");
        }
        return await teamRepository.delete(id);
    }
}