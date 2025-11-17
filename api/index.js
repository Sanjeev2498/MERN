import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Server is connected to Database Successfully");
})
.catch((err)=>{
console.log(`Error on Site`,err);

});
const app=express();

app.listen(9000,()=>{
    console.log(`Server is listening at PORT : 9000!`);
    
});