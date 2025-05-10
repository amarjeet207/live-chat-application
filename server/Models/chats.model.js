import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
    users: {
        type: [
            { type: mongoose.Schema.Types.ObjectId,ref: 'users'}],
    },
    lastMessageId : {
        type: mongoose.Schema.Types.ObjectId, ref: 'messages'
    },
    unreadMessageCount: {
        type: Number,
        default: 0
    }
   
}, {timestamps: true})

const chatModel = mongoose.model("Chat",chatSchema);

export default chatModel;