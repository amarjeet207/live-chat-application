import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import {userRoutes} from './Routes/users.route.js';
import { chatRoutes } from './Routes/chats.route.js';
import { messageRoutes } from './Routes/messages.route.js';

// app created
const app = express();
app.listen(3000,()=>{
  console.log("server running at port 3000");
})


// Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection;

db.on("open", () => {
  console.log("DB connection is successful");
});

db.on("error", () => {
  console.log("Error in DB connection");
});


// Middlewares
app.use(express.json());
app.use(cors());

// Routes
userRoutes(app);
chatRoutes(app);
messageRoutes(app);