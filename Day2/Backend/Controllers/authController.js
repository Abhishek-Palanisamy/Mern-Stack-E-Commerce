

import userModel from "../Models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { username, emailid, password, mobileno } = req.body; 
    const existingUser = await userModel.findOne({ $or: [{ emailid }, { mobileno }] });

    if (existingUser) {
      let errorMessage;
      if (existingUser.emailid === emailid && existingUser.mobileno === mobileno) {
        errorMessage = "Email and Mobile Already Registered";
      } else if (existingUser.emailid === emailid) {
        errorMessage = "Email Already Registered";
      } else if (existingUser.mobileno === mobileno) {
        errorMessage = "Mobile Already Registered";
      }
    
      return res.status(200).send({
        success: false,
        message: errorMessage,
      });
    }
    
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      username,
      emailid,
      mobileno,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { emailid, password } = req.body;
    //validation
    if (!emailid || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    //check user
    const user = await userModel.findOne({ emailid });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is Not Registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token =  JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfull",
      user: {
        _id: user._id,
        username: user.username,
        emailid: user.emailid,
        mobileno: user.mobileno,
        role: user.role,
      },
      token,
      username: user.username, // Sending username in the response
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};


//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};




