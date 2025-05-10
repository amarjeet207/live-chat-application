import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import userModel from "../Models/users.model.js";

// signup
export async function signup(req, res) {
  try {
    const { fullName, email, password, profilePic } = req.body;

    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res
        .status(403)
        .json({ message: "User with this email already exists." });
    }

    const newUser = await new userModel({
      fullName,
      email,
      password: bcrypt.hashSync(password, 10),
      profilePic: profilePic || "",
    }).save();

    res.status(201).json({ message: newUser });
  } catch (error) {
    res.status(500).send({ error: error.message || "Signup failed. Please retry." });
  }
}

// signin
export async function signin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(403)
        .json({ message: "User with this email dosen't exist." });
    }

    let validatePassword = bcrypt.compareSync(password, user.password);

    if (!validatePassword) {
      return res.status(403).json({ message: "Password is incorrect." });
    }

    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "1d"});

    res
      .status(201)
      .json({ message: "Login successful!", token: token });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ error: error.message || "Error fetching users" });
  }
}

// get-all-users
export async function allUsers(req, res) {
  try {
    const users = await userModel.find({});
    res.status(200).json({users});
} catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message || "Error fetching users" });

}
}
