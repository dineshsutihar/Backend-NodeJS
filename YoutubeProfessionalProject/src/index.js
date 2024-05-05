// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';


dotenv.config({
    path:'./env'
})


connectDB()














//another approach but not good approach 
/*
import express from "express";

const app = express()

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Error: app is not able to talk to db,",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/