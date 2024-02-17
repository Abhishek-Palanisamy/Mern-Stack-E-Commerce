import mongoose from 'mongoose'
import colors from 'colors' 
const connectDB = async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to mongo db ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error in mongo db ${error}`.bgRed.white)
    }
}

export default connectDB;