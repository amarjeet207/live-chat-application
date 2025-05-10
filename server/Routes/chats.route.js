import { verifyToken } from "../Middlewares/verifyToken.js";
import { startChat } from "../Controllers/chats.controller.js";
import { allChats } from "../Controllers/chats.controller.js";

export function chatRoutes(app){
    app.post("/api/start-new-chat",verifyToken,startChat);
    app.get("/api/get-all-chats",verifyToken,allChats);
}