import jwt from "jsonwebtoken";
import userModel from "../Models/users.model.js";

export function verifyToken(req, res, next) {
    if (!(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT")) {
        return res.status(403).json({ message: "Not login" });
    }
    
    if ( req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT") {
      jwt.verify( req.headers.authorization.split(" ")[1], process.env.SECRET_KEY, function (err, verifiedToken) {
        if (err) {
            return res.status(403).json({ message: "Invalid JWT Token" });
          }
          userModel.findById(verifiedToken.userId).then((user) => {
              req.user = user;
              next();
            })
            .catch((err) => res.status(500).json({ message: err.message }));
        }
      );
    }
  }