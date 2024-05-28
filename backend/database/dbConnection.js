import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MYRESTAURANT",
        
    })
    .then (() => {
        console.log("Connected to database successfulyy!");
    }).catch(err => {
        console.log(`Some error occured while connecting to databse ${err}`);
    });
};