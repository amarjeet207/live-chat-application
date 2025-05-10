import {verifyToken} from '../Middlewares/verifyToken.js'
import { sendMessage } from '../Controllers/messages.controller.js';
import { getAllMessage } from '../Controllers/messages.controller.js';

export function messageRoutes(app){
    app.post("/api/send-a-message",verifyToken,sendMessage);
    app.get("/api/get-all-message/:chatId",verifyToken,getAllMessage);
}