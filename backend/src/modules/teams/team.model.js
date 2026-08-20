import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export const Team = mongoose.model('Team', teamSchema);