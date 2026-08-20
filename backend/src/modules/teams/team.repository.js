import { Team } from './team.model.js';

export const teamRepository = {
    // Read all
    findAll: async () => {
        return await Team.findAll();
    },

    // find by id
    findById: async (id) => {
        return await Team.findById(id);
    },

    // Create
    create: async(teamData) => {
        return await Team.create(teamData);
    },

    // Update
    update: async(id, updateData) => {
        return await Team.update(id, updateData);
    },

    // Delete
    delete: async(id) => {
        return await Team.delete(id);
    }
}