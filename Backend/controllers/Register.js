const Register=require('../models/registerModel');
const bcrypt=require('bcrypt');
const JWT=require('jsonwebtoken');

const hashPassword=async (password)=>{
    try{
        const hashedPassword=await bcrypt.hash(password,10);
        return hashedPassword;
    }
    catch (error){
       console.log(error);
    }
}

const comparePassword=async (password,hashedPassword)=>{
    try{
      return await bcrypt.compare(password,hashedPassword);
    }
    catch (error){
        console.log(error);
    }
}

const registerNewUser=async(req,res)=>{
    try{
       const {name,email,phone,password,address}=req.body;
       //validation
       if(!name||!email||!phone||!password||!address)
       return res.status(400).send("All fields are required");
       //check existing user
       const existingUser=await Register.findOne({email});
       if(existingUser)
       return res.status(400).send("A user with this email is allready registered");
       //creating user
       const hashedPassword=await hashPassword(password);
       const user=new Register({name,email,phone,password:hashedPassword,address});
       const newUser=await user.save();
       res.status(201).send(newUser);
    }
    catch (error){
        res.status(500).send("Server Error:" + error);
    }
}

//login user
const loginUser=async (req,res)=>{
    try{
       const {email,password}=req.body;
       if(!email||!password)
       return res.status(400).send("All fields are required");
       const user=await Register.findOne({email});
       if(!user) 
       return res.status(400).send("Incorrect login field");
       const match=await comparePassword(password,user.password);
       if(!match)
       return res.status(400).send("Incorrect login field");
       const token=JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'}); 
       res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
        token,
      });
    }
    catch (error){
       res.status(500).send("Server Error" + error);
    }
}

//Check for token
const checkToken=async (req,res)=>{
    try{
        res.status(200).send("Protected routes");
    }
    catch (error){
       res.status(400).send("Invalid token:" + error);
    }
}

module.exports={registerNewUser,loginUser,checkToken};