import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
    {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export const Skill = mongoose.model('Skill', skillSchema);