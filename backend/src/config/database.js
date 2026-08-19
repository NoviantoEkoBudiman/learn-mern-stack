import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        const con = mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected:", con);
    }catch (err) {
        console.error("Error occured: ", err);
    }
}