import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect("mongodb+srv://muazislambabar_db_user:axTb6KXLYk8AR5Ez@cluster0.l6iqnpu.mongodb.net/halley")
    
    console.log("DB is connected")
}

export default connectDB;
