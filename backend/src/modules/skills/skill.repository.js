import { Skill } from './skill.model.js';

export const skillRepository = {
    // Read all data
    findAll: async () => {
        return await Skill.find();
    },

    // Find by id
    findById: async (id) => {
        return await Skill.findById(id);
    },

    // Create
    create: async (skillData) => {
        return await Skill.create(skillData);
    },

    // Update
    update: async (id, updateData) => {
        return await Skill.update(id, updateData);
    },

    // Delete
    delete: async (id) => {
        return await Skill.delete(id);
    }
}