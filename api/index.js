import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Server is connected to Database Successfully");
})
.catch((err)=>{
console.log(`Error on Site`,err);

});
const app=express();

app.use(express.json());

app.listen(9000,()=>{
    console.log(`Server is listening at PORT : 9000!`);
});
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.use((err,req,res,next) => {
    const statusCode =err.statusCode || 500;
    const message =err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
});