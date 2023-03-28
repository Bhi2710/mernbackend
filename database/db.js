import mongoose from "mongoose";

export const Connection = async (URL) =>{
    try{
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
       console.log("database is connected");
    }catch(err){
        console.log("Error to connect database", err)
    }
}

export default Connection;