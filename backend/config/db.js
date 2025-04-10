import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rishu:zwiggy@cluster0.uh8of.mongodb.net/?retryWrites=true').then(()=>console.log("DB Connected"));
   
}


