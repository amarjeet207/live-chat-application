import mongoose from "mongoose";
import chatModel from "../Models/chats.model.js";

// start-a-chat
export async function startChat(req,res){
    try {
        const {users} = req.body;

        const chat = await new chatModel({users}).save();

        res.status(201).json({chat});
        
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

// get-all-chats of a user
export async function allChats(req,res){
    try {
        const user = req.user;
        const userAllChats = await chatModel.find({ users: { $in: user._id } });

        res.status(200).json({userAllChats});
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}