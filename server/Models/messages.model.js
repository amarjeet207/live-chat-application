import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId, ref: "chats"
    },
    content: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    },
    read: {
        type: Boolean,
        default: false
    }

},{timestamps: true})

const messageModel = mongoose.model("Message",messageSchema);

export default messageModel;