import messageModel from "../Models/messages.model.js";
import chatModel from '../Models/chats.model.js'

export async function sendMessage(req,res){
   try {
    const {chatId, content,sender} = req.body;

    // new message
    const msg = await new messageModel({
        chatId,
        content,
        sender,
    }).save();

    // update last message
    const chat = await chatModel.findById(chatId);
    chat.lastMessageId = msg._id;
    await chat.save();

    res.status(201).json({message:"message sent", data: msg});
   } catch (error) {
    res.status(500).json({error: error.message || "unable to send message"});
   }
}

export async function getAllMessage(req,res){
    try {
        const messages = await messageModel.find({chatId: req.params.chatId}).sort({createdAt: 1});

        res.status(200).json({message:"all messages", data: messages});
       } catch (error) {
        res.status(500).json({error: error.message || "unable to fetch messages"})
       }
}