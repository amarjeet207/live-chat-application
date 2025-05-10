import { signin } from "../Controllers/users.controller.js";
import { signup } from "../Controllers/users.controller.js";
import { allUsers } from "../Controllers/users.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function userRoutes(app){
    app.post("/api/signup",signup);
    app.post("/api/signin",signin);
    app.get("/api/get-all-users",verifyToken,allUsers);
}