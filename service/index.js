import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//routes import
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDB conection is live!');
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB connection lost!");
})

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connection running!");
})

//middlewares
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelsRoute);
app.use('/rooms', roomsRoute);

app.listen(8800, () => {
    connect();
    console.log('Connected to backend.');
});

