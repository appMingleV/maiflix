import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://vanshdeep703:xKEtcKwfzFwEJejr@cluster0.k484z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;
