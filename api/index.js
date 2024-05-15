import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
console.log('Connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
})


const app= express();

app.listen(3000, ()=>{
    console.log('server is runnig on port 3000!!!!!!')
})